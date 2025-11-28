//src/app/dashboard/dashboard/articles/page.tsx
'use client'

import { useState, useEffect, FormEvent } from 'react'
import { Search, Plus, Pencil, Trash2, Upload, Link as LinkIcon, Image as ImageIcon, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
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
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
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

  // Fetch articles from API
  useEffect(() => {
    fetchArticles(pagination.currentPage, pagination.itemsPerPage)
  }, [])

  const fetchArticles = async (page: number = 1, limit: number = 10) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/articles?page=${page}&limit=${limit}`)
      if (!response.ok) throw new Error('Failed to fetch articles')
      
      const result = await response.json()
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
    setIsModalOpen(true)
  }

  const handleEdit = (article: Article) => {
    setEditingArticle(article)
    setFormData({
      title: article.title,
      slug: article.slug,
      author: article.author,
      description: article.description,
      content: article.content,
      image_cover: article.image_cover,
      date_published: article.date_published,
      category: article.category,
      status: article.status
    })
    setIsModalOpen(true)
  }

  const handleView = (article: Article) => {
    setViewingArticle(article)
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

    const formDataUpload = new FormData()
    formDataUpload.append('file', file)
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
    
    try {
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

      await fetchArticles(pagination.currentPage, pagination.itemsPerPage)
      setIsModalOpen(false)
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
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
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
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.status === 'published' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
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
          <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4">
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
                    className={`rounded-lg w-10 h-10 ${
                      page === pagination.currentPage
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">
                Article Information
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
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

            {/* Cover Image Section */}
            <div className="space-y-4">
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
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#CBFE33] text-gray-900 hover:bg-[#b8e62e] rounded-xl"
              >
                {editingArticle ? 'Update Article' : 'Publish Article'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* View Article Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Article Preview</DialogTitle>
          </DialogHeader>

          {viewingArticle && (
            <div className="space-y-6">
              {/* Header Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {viewingArticle.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    viewingArticle.category === 'Feature' || viewingArticle.category === 'Collection'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : viewingArticle.category === 'Activity'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                      : viewingArticle.category === 'Gallery'
                      ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300'
                      : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {viewingArticle.category}
                  </span>

                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    viewingArticle.status === 'published'
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
              {viewingArticle.image_cover && (
                <div className="w-full rounded-xl overflow-hidden">
                  <img
                    src={viewingArticle.image_cover}
                    alt={viewingArticle.title}
                    className="w-full h-auto max-h-96 object-cover"
                  />
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
