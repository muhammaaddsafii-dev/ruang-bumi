//src/app/dashboard/dashboard/articles/page.tsx
'use client'

import { useState, useEffect, FormEvent } from 'react'
import { Search, Plus, Pencil, Trash2, Upload, Link as LinkIcon, Image as ImageIcon, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import slugify from 'slugify'
import 'react-quill/dist/quill.snow.css'

// Dynamically import React-Quill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-gray-100 dark:bg-gray-900 rounded-xl animate-pulse" />
})

interface Article {
  id: number
  title: string
  slug: string
  author: string
  description: string
  content: string
  image_cover: string
  date_published: string
  category: string
  status: string
}

interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [viewingArticle, setViewingArticle] = useState<Article | null>(null)
  const [viewGalleryImages, setViewGalleryImages] = useState<{ id: number, image_url: string }[]>([])
  const [viewCurrentImageIndex, setViewCurrentImageIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [uploadingGallery, setUploadingGallery] = useState(false)
  const [articleImages, setArticleImages] = useState<{ id: number, image_url: string }[]>([])
  const [imagesToDelete, setImagesToDelete] = useState<number[]>([]) // Track images to delete
  const [galleryFiles, setGalleryFiles] = useState<File[]>([])
  const [galleryUrls, setGalleryUrls] = useState<string[]>([])
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10
  })
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    author: '',
    description: '',
    content: '',
    image_cover: '',
    date_published: '',
    category: 'Feature',
    status: 'draft'
  })

  // Rich Text Editor Modules
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'align',
    'link', 'image'
  ]

  // Helper function to sort images by filename
  const sortImagesByFilename = (images: { id: number, image_url: string }[]) => {
    return images.sort((a, b) => {
      // Extract filename from URL
      const getFilename = (url: string) => {
        const parts = url.split('/')
        return parts[parts.length - 1] // Get last part (filename)
      }

      const filenameA = getFilename(a.image_url)
      const filenameB = getFilename(b.image_url)

      // Natural sort comparison (handles numbers properly: 1.png, 2.png, 10.png)
      return filenameA.localeCompare(filenameB, undefined, { numeric: true, sensitivity: 'base' })
    })
  }

  // Fetch articles from API
  useEffect(() => {
    fetchArticles(pagination.currentPage, pagination.itemsPerPage)
  }, [])

  const fetchArticles = async (page: number = 1, limit: number = 10) => {
    try {
      setLoading(true)
      // Add timestamp to prevent caching
      const response = await fetch(`/api/articles?page=${page}&limit=${limit}&_t=${Date.now()}`)
      if (!response.ok) throw new Error('Failed to fetch articles')

      const result = await response.json()
      console.log('Fetched articles:', result.data.map((a: Article) => ({ id: a.id, date: a.date_published })))

      setArticles(result.data)
      setPagination({
        currentPage: result.pagination.currentPage,
        totalPages: result.pagination.totalPages,
        totalItems: result.pagination.totalItems,
        itemsPerPage: limit
      })
    } catch (error) {
      console.error('Error fetching articles:', error)
      alert('Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchArticles(newPage, pagination.itemsPerPage)
    }
  }

  const handleItemsPerPageChange = (value: string) => {
    const newLimit = parseInt(value)
    setPagination(prev => ({ ...prev, itemsPerPage: newLimit }))
    fetchArticles(1, newLimit)
  }

  const handleAdd = () => {
    setEditingArticle(null)
    setFormData({
      title: '',
      slug: '',
      author: '',
      description: '',
      content: '',
      image_cover: '',
      date_published: new Date().toISOString().split('T')[0],
      category: 'Feature',
      status: 'draft'
    })
    setArticleImages([])
    setImagesToDelete([])
    setGalleryFiles([])
    setGalleryUrls([])
    setIsModalOpen(true)
  }

  const handleEdit = async (article: Article) => {
    // Fetch fresh data from API instead of using state
    try {
      const response = await fetch(`/api/articles/${article.id}?_t=${Date.now()}`)
      if (!response.ok) throw new Error('Failed to fetch article')

      const freshArticle = await response.json()
      setEditingArticle(freshArticle)

      // Convert date_published to YYYY-MM-DD format for input type="date"
      // Use local date to avoid timezone issues
      let dateValue = new Date().toISOString().split('T')[0]
      if (freshArticle.date_published) {
        const date = new Date(freshArticle.date_published)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        dateValue = `${year}-${month}-${day}`
      }

      console.log('Edit article:', freshArticle.id)
      console.log('Date from API:', freshArticle.date_published)
      console.log('Date formatted:', dateValue)

      setFormData({
        title: freshArticle.title,
        slug: freshArticle.slug,
        author: freshArticle.author,
        description: freshArticle.description,
        content: freshArticle.content,
        image_cover: freshArticle.image_cover,
        date_published: dateValue,
        category: freshArticle.category,
        status: freshArticle.status
      })

      // Fetch existing images for this article
      try {
        const imagesResponse = await fetch(`/api/articles/${freshArticle.id}/images`)
        const imagesData = await imagesResponse.json()
        const sortedImages = sortImagesByFilename(imagesData.data || [])
        setArticleImages(sortedImages)
      } catch (error) {
        console.error('Error fetching article images:', error)
        setArticleImages([])
      }

      // Reset images to delete
      setImagesToDelete([])

      setIsModalOpen(true)
    } catch (error) {
      console.error('Error fetching article for edit:', error)
      alert('Failed to load article data')
    }
  }

  const handleView = async (article: Article) => {
    setViewingArticle(article)
    setViewCurrentImageIndex(0)

    // Fetch gallery images for preview
    try {
      const response = await fetch(`/api/articles/${article.id}/images`)
      const data = await response.json()
      const sortedImages = sortImagesByFilename(data.data || [])
      setViewGalleryImages(sortedImages)
    } catch (error) {
      console.error('Error fetching article images for preview:', error)
      setViewGalleryImages([])
    }

    setIsViewModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this article?')) {
      try {
        const response = await fetch(`/api/articles/${id}`, {
          method: 'DELETE',
        })

        if (!response.ok) throw new Error('Failed to delete article')

        await fetchArticles(pagination.currentPage, pagination.itemsPerPage)
        alert('Article deleted successfully')
      } catch (error) {
        console.error('Error deleting article:', error)
        alert('Failed to delete article')
      }
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    if (!formData.title) {
      alert('Please enter a title before uploading an image')
      return
    }

    const formDataUpload = new FormData()
    const fileName = formData.title ? `${formData.title} ${file.name}` : file.name
    formDataUpload.append('file', file, fileName)
    formDataUpload.append('folder', 'articles')

    try {
      setUploading(true)
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload,
      })

      if (!res.ok) throw new Error('Upload failed')

      const data = await res.json()
      setFormData(prev => ({ ...prev, image_cover: data.url }))
      alert('Image uploaded successfully!')
    } catch (err) {
      console.error('Upload error:', err)
      alert('Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.title.trim()) {
      alert('Please enter a title for the article')
      return
    }

    try {
      // Upload gallery files first if any
      let newGalleryUrls: string[] = []
      if (galleryFiles.length > 0) {
        try {
          setUploadingGallery(true)
          const uploadPromises = galleryFiles.map(async (file) => {
            const formDataUpload = new FormData()
            const fileName = formData.title ? `${formData.title} ${file.name}` : file.name
            formDataUpload.append('file', file, fileName)
            formDataUpload.append('folder', 'articles/gallery')

            const res = await fetch('/api/upload', {
              method: 'POST',
              body: formDataUpload,
            })

            if (!res.ok) throw new Error(`Failed to upload ${file.name}`)

            const data = await res.json()
            return data.url
          })

          newGalleryUrls = await Promise.all(uploadPromises)
        } catch (uploadError) {
          console.error('Error uploading gallery images:', uploadError)
          alert('Failed to upload some gallery images')
          setUploadingGallery(false)
          return // Stop submission if upload fails
        } finally {
          setUploadingGallery(false)
        }
      }

      const method = editingArticle ? 'PUT' : 'POST'
      const url = editingArticle
        ? `/api/articles/${editingArticle.id}`
        : '/api/articles'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error(`Failed to ${editingArticle ? 'update' : 'create'} article`)

      const result = await response.json()

      // If editing and have images to delete, delete them now
      if (editingArticle && imagesToDelete.length > 0) {
        try {
          for (const imageId of imagesToDelete) {
            await fetch(
              `/api/articles/${editingArticle.id}/images?image_id=${imageId}`,
              { method: 'DELETE' }
            )
          }
        } catch (deleteError) {
          console.error('Error deleting images:', deleteError)
          // Continue even if some deletes fail
        }
      }

      // Save new gallery images (both from files and previously uploaded URLs)
      const allGalleryUrls = [...galleryUrls, ...newGalleryUrls]
      if (allGalleryUrls.length > 0) {
        try {
          const articleId = editingArticle ? editingArticle.id : result.id
          await fetch(`/api/articles/${articleId}/images`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image_urls: allGalleryUrls }),
          })
        } catch (imageError) {
          console.error('Error saving gallery images:', imageError)
          // Don't fail the whole operation if gallery save fails
        }
      }

      // Refresh articles data to get latest from database
      await fetchArticles(pagination.currentPage, pagination.itemsPerPage)

      // Close modal after data is refreshed
      setIsModalOpen(false)
      setGalleryFiles([])
      setGalleryUrls([])
      setImagesToDelete([])

      alert(`Article ${editingArticle ? 'updated' : 'created'} successfully`)
    } catch (error) {
      console.error('Error saving article:', error)
      alert(`Failed to ${editingArticle ? 'update' : 'create'} article`)
    }
  }

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleTitleChange = (value: string) => {
    setFormData({
      ...formData,
      title: value,
      slug: slugify(value, { lower: true, strict: true })
    })
  }

  const handleEditorChange = (content: string) => {
    setFormData({ ...formData, content })
  }

  // Handle gallery files selection
  const handleGalleryFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData.title) {
      alert('Please enter a title before selecting gallery images')
      e.target.value = ''
      return
    }
    const files = Array.from(e.target.files || [])

    // Validate files
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} is not an image file`)
        return false
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} is larger than 5MB`)
        return false
      }
      return true
    })

    setGalleryFiles(prev => [...prev, ...validFiles])
  }

  // Remove file from gallery
  const removeGalleryFile = (index: number) => {
    setGalleryFiles(prev => prev.filter((_, i) => i !== index))
  }

  // Mark gallery image for deletion (staged deletion)
  const handleDeleteGalleryImage = (imageId: number) => {
    if (!confirm('Mark this image for deletion? It will be permanently deleted when you update the article.')) return

    // Add to delete list
    setImagesToDelete(prev => [...prev, imageId])
    // Hide from UI immediately
    setArticleImages(prev => prev.filter(img => img.id !== imageId))
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    let start = Math.max(1, pagination.currentPage - Math.floor(maxVisible / 2))
    let end = Math.min(pagination.totalPages, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Articles</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your blog content</p>
        </div>
        <Button
          onClick={handleAdd}
          className="bg-[#CBFE33] text-gray-900 hover:bg-[#b8e62e] rounded-xl h-12 px-6"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Article
        </Button>
      </div>

      {/* Search and Items Per Page */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 rounded-xl dark:bg-gray-900"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="items-per-page" className="text-sm whitespace-nowrap">
            Items per page:
          </Label>
          <Select
            value={pagination.itemsPerPage.toString()}
            onValueChange={handleItemsPerPageChange}
          >
            <SelectTrigger className="w-20 h-12 rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-gray-900">
              <TableHead className="w-20">Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="dark:bg-gray-900 dark:text-white">
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  Loading articles...
                </TableCell>
              </TableRow>
            ) : filteredArticles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  No articles found
                </TableCell>
              </TableRow>
            ) : (
              filteredArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>
                    {article.image_cover ? (
                      <img
                        src={article.image_cover}
                        alt={article.title}
                        className="w-16 h-12 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-16 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    {article.title.split(' ').slice(0, 6).join(' ')}
                    {article.title.split(' ').length > 6 && '...'}
                  </TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>{new Date(article.date_published).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {article.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${article.status === 'published'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                      {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(article)}
                        className="hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(article)}
                        className="hover:bg-[#CBFE33]/20"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(article.id)}
                        className="hover:bg-red-100 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {!loading && filteredArticles.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 dark:bg-gray-900 dark:text-white">
            <div className="flex items-center justify-between">
              {/* Pagination Info */}
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to{' '}
                {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of{' '}
                {pagination.totalItems} articles
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  className="rounded-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* First Page */}
                {getPageNumbers()[0] > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(1)}
                      className="rounded-lg w-10 h-10"
                    >
                      1
                    </Button>
                    {getPageNumbers()[0] > 2 && (
                      <span className="text-gray-500">...</span>
                    )}
                  </>
                )}

                {/* Page Numbers */}
                {getPageNumbers().map((page) => (
                  <Button
                    key={page}
                    variant={page === pagination.currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={`rounded-lg w-10 h-10 ${page === pagination.currentPage
                      ? 'bg-[#CBFE33] text-gray-900 hover:bg-[#b8e62e]'
                      : ''
                      }`}
                  >
                    {page}
                  </Button>
                ))}

                {/* Last Page */}
                {getPageNumbers()[getPageNumbers().length - 1] < pagination.totalPages && (
                  <>
                    {getPageNumbers()[getPageNumbers().length - 1] < pagination.totalPages - 1 && (
                      <span className="text-gray-500">...</span>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(pagination.totalPages)}
                      className="rounded-lg w-10 h-10"
                    >
                      {pagination.totalPages}
                    </Button>
                  </>
                )}

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                  className="rounded-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {editingArticle ? 'Edit Article' : 'Add New Article'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Article Information Section */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {/* Cover Image Section */}
                <div className="space-y-4">

                  <div>
                    <Label htmlFor="title">Article Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      required
                      className="rounded-xl h-11"
                      placeholder="Enter a compelling title for your article"
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug">Slug *</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      required
                      className="rounded-xl h-11"
                      placeholder="url-friendly-version-of-title"
                    />
                    <p className="text-xs text-gray-500 mt-1">Auto-generated from title</p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">
                    Cover Image
                  </h3>

                  <div className="flex items-start gap-4">
                    <div className="w-32 h-24 bg-gray-100 dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                      {formData.image_cover ? (
                        <img
                          src={formData.image_cover}
                          alt="Cover preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageIcon className="w-10 h-10 text-gray-400" />
                      )}
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <Label htmlFor="image_url">Image URL</Label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="image_url"
                              value={formData.image_cover}
                              onChange={(e) => setFormData({ ...formData, image_cover: e.target.value })}
                              className="rounded-xl h-11 pl-10"
                              placeholder="https://example.com/image.jpg"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                        <span className="text-xs text-gray-500">OR</span>
                        <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        className="w-full rounded-xl h-11"
                        disabled={uploading}
                        onClick={() => document.getElementById('file-upload')?.click()}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {uploading ? 'Uploading...' : 'Upload Image to S3'}
                      </Button>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <p className="text-xs text-gray-500">
                        Max size: 5MB. Supported: JPG, PNG, GIF, WebP
                      </p>
                    </div>
                  </div>
                </div>



                {/* Gallery Images Section */}
                <div className="space-y-4">

                  {/* Existing Images (from database) */}
                  {articleImages.length > 0 && (
                    <div>
                      <Label className="mb-2 block">Uploaded Images ({articleImages.length})</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {articleImages.map((image) => (
                          <div key={image.id} className="relative group">
                            <img
                              src={image.image_url}
                              alt="Gallery"
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700"
                            />
                            {/* Delete button - always visible with red trash icon */}
                            <button
                              type="button"
                              onClick={() => handleDeleteGalleryImage(image.id)}
                              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
                              title="Mark for deletion"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Images marked for deletion */}
                  {imagesToDelete.length > 0 && (
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-red-700 dark:text-red-300">
                          Images marked for deletion ({imagesToDelete.length})
                        </Label>
                        <p className="text-xs text-red-600 dark:text-red-400">
                          Will be permanently deleted when you click "Update Article"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* File Selection Preview */}
                  {galleryFiles.length > 0 && (
                    <div>
                      <Label className="mb-2 block">Selected Files - Ready to Upload ({galleryFiles.length})</Label>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 mb-3">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          These files will be automatically uploaded when you click "{editingArticle ? 'Update' : 'Publish'} Article"
                        </p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryFiles.map((file, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="w-full h-32 object-cover rounded-lg border-2 border-dashed border-[#CBFE33]"
                            />
                            <button
                              type="button"
                              onClick={() => removeGalleryFile(index)}
                              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 shadow-lg transition-all hover:scale-110"
                            >
                              <X className="w-4 h-4" />
                            </button>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 truncate px-1">
                              {file.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Upload Controls */}
                  <div className="space-y-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full rounded-xl h-11"
                      onClick={() => document.getElementById('gallery-upload')?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {galleryFiles.length > 0 ? 'Select More Images' : 'Select Multiple Images'}
                    </Button>
                    <input
                      id="gallery-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleGalleryFilesChange}
                    />

                    <p className="text-xs text-gray-500">
                      Select multiple images at once. Max 5MB per image. Supported: JPG, PNG, GIF, WebP
                      <br />
                      <span className="text-black dark:text-white font-medium">Images will be uploaded when you submit the form.</span>
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={3}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
                    placeholder="Write a brief description (appears in previews)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="author">Author *</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    required
                    className="rounded-xl h-11"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="rounded-xl h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Feature">Feature Collection</SelectItem>
                      <SelectItem value="Collection">Collection</SelectItem>
                      <SelectItem value="Activity">Activity</SelectItem>
                      <SelectItem value="Gallery">Gallery</SelectItem>
                      <SelectItem value="Solution">Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status">Status *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({ ...formData, status: value })}
                  >
                    <SelectTrigger className="rounded-xl h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date">Date Published *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date_published}
                    onChange={(e) => setFormData({ ...formData, date_published: e.target.value })}
                    required
                    className="rounded-xl h-11"
                  />
                </div>
              </div>
            </div>

            {/* Article Content Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">
                Article Content
              </h3>

              <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden">
                <ReactQuill
                  value={formData.content}
                  onChange={handleEditorChange}
                  modules={modules}
                  formats={formats}
                  className="bg-white dark:bg-gray-900"
                  theme="snow"
                  placeholder="Write your article content here..."
                />
              </div>
              <style jsx global>{`
                .ql-container {
                  min-height: 300px;
                  font-size: 16px;
                }
                .ql-editor {
                  min-height: 300px;
                }
              `}</style>
            </div>


            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl"
                disabled={uploadingGallery}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#CBFE33] text-gray-900 hover:bg-[#b8e62e] rounded-xl"
                disabled={uploadingGallery}
              >
                {uploadingGallery ? (
                  <>
                    <Upload className="w-4 h-4 mr-2 animate-spin" />
                    Uploading Images...
                  </>
                ) : (
                  <>
                    {editingArticle ? 'Update Article' : 'Publish Article'}
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* View Article Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {viewingArticle && (
            <div className="space-y-6">
              {/* Header Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {viewingArticle.title}
                </h2>

                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${viewingArticle.category === 'Feature' || viewingArticle.category === 'Collection'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : viewingArticle.category === 'Activity'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                      : viewingArticle.category === 'Gallery'
                        ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    }`}>
                    {viewingArticle.category}
                  </span>

                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${viewingArticle.status === 'published'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                    {viewingArticle.status.charAt(0).toUpperCase() + viewingArticle.status.slice(1)}
                  </span>

                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    By {viewingArticle.author} • {new Date(viewingArticle.date_published).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>

              {/* Cover Image */}
              {/* {viewingArticle.image_cover && (
                <div className="w-full rounded-xl overflow-hidden">
                  <img
                    src={viewingArticle.image_cover}
                    alt={viewingArticle.title}
                    className="w-full h-auto max-h-96 object-cover"
                  />
                </div>
              )} */}

              {/* Gallery Images Slider */}
              {viewGalleryImages.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">
                    Gallery Images ({viewGalleryImages.length})
                  </h3>

                  {/* Main Image */}
                  <div className="relative">
                    <div className="w-full min-h-[400px] max-h-[600px] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
                      <img
                        src={viewGalleryImages[viewCurrentImageIndex].image_url}
                        alt={`Gallery image ${viewCurrentImageIndex + 1}`}
                        className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {viewGalleryImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setViewCurrentImageIndex(prev =>
                            prev === 0 ? viewGalleryImages.length - 1 : prev - 1
                          )}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-[#CBFE33] rounded-full p-3 shadow-lg transition-all"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setViewCurrentImageIndex(prev =>
                            prev === viewGalleryImages.length - 1 ? 0 : prev + 1
                          )}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-[#CBFE33] rounded-full p-3 shadow-lg transition-all"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {viewCurrentImageIndex + 1} / {viewGalleryImages.length}
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  {viewGalleryImages.length > 1 && (
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                      {viewGalleryImages.map((image, index) => (
                        <button
                          key={image.id}
                          type="button"
                          onClick={() => setViewCurrentImageIndex(index)}
                          className={`relative h-20 rounded-lg overflow-hidden transition-all ${viewCurrentImageIndex === index
                            ? 'ring-4 ring-[#CBFE33] opacity-100'
                            : 'opacity-60 hover:opacity-100'
                            }`}
                        >
                          <img
                            src={image.image_url}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Description
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  {viewingArticle.description}
                </p>
              </div>

              {/* Article Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b pb-2">
                  Content
                </h3>
                <div
                  className="prose dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400"
                  dangerouslySetInnerHTML={{ __html: viewingArticle.content }}
                />
              </div>

            </div>
          )}

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setIsViewModalOpen(false)}
              className="rounded-xl"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                if (viewingArticle) {
                  setIsViewModalOpen(false)
                  handleEdit(viewingArticle)
                }
              }}
              className="bg-[#CBFE33] text-gray-900 hover:bg-[#b8e62e] rounded-xl"
            >
              <Pencil className="w-4 h-4 mr-2" />
              Edit Article
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
