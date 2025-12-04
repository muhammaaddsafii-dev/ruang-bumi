//src/app/dashboard/dashboard/index/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { MapPin, Calendar, FolderKanban, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamic import untuk map component (client-side only)
const GeometryViewer = dynamic(
  () => import('@/components/IndexProject/GeometryViewer'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[500px] bg-gray-100 rounded-lg">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }
)

interface Collection {
  id: number
  name: string
  tahun: string
  date: string
  jenis: string
  resolusi: string
  project: string
  latitude: number
  longitude: number
  geometry: any
}

const ITEMS_PER_PAGE = 10

type SortOrder = 'asc' | 'desc'

export default function IndexProjectPage() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  // Fetch all collections
  const fetchCollections = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/collections')
      if (!response.ok) throw new Error('Failed to fetch collections')
      const data = await response.json()
      
      // Debug: Log data yang diterima
      console.log('Fetched collections:', data)
      
      // Pastikan data adalah array
      if (Array.isArray(data)) {
        setCollections(data)
      } else {
        console.error('Data is not an array:', data)
        setCollections([])
      }
    } catch (error) {
      console.error('Error fetching collections:', error)
      setCollections([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCollections()
  }, [])

  // Sort collections by date
  const sortedCollections = [...collections].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    
    if (sortOrder === 'asc') {
      return dateA - dateB
    } else {
      return dateB - dateA
    }
  })

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
    setCurrentPage(1) // Reset to first page when sorting
  }

  // Pagination calculations
  const totalPages = Math.ceil(sortedCollections.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentCollections = sortedCollections.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Index Project</h1>
        <p className="text-sm text-gray-600 mt-1">Manage your geospatial collections</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#70E000]/10 rounded-lg">
              <FolderKanban className="w-6 h-6 text-[#70E000]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Collections</p>
              <p className="text-2xl font-bold text-gray-900">{collections.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#CBFE33]/10 rounded-lg">
              <MapPin className="w-6 h-6 text-[#CBFE33]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Unique Projects</p>
              <p className="text-2xl font-bold text-gray-900">
                {new Set(collections.map(c => c.project)).size}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#FAF000]/10 rounded-lg">
              <Calendar className="w-6 h-6 text-[#FAF000]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Latest Year</p>
              <p className="text-2xl font-bold text-gray-900">
                {collections.length > 0 ? Math.max(...collections.map(c => parseInt(c.tahun) || 0)) : '-'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Viewer */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Geometry Viewer</h2>
        <div className="rounded-lg overflow-hidden">
          <GeometryViewer />
        </div>
      </div>

      {/* Collections Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#70E000]"></div>
            </div>
          ) : collections.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No collections yet.
            </div>
          ) : (
            <>
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resolution</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button
                        onClick={toggleSortOrder}
                        className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                        title={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                      >
                        Date
                        <ArrowUpDown className="w-4 h-4" />
                      </button>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentCollections.map((collection) => (
                    <tr key={collection.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {collection.name || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {collection.project || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {collection.tahun || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-[#70E000]/10 text-gray-700 rounded-full">
                          {collection.jenis || '-'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {collection.resolusi || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {collection.date || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xs text-gray-500">
                          {collection.latitude && collection.longitude 
                            ? `${collection.latitude.toFixed(4)}, ${collection.longitude.toFixed(4)}`
                            : '-'
                          }
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {Math.min(endIndex, sortedCollections.length)} of {sortedCollections.length} entries
                    <span className="ml-2 text-gray-400">
                      (sorted by date: {sortOrder === 'asc' ? 'oldest first' : 'newest first'})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => goToPage(page)}
                              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                page === currentPage
                                  ? 'bg-[#70E000] text-gray-900'
                                  : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              {page}
                            </button>
                          )
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return <span key={page} className="px-2 text-gray-400">...</span>
                        }
                        return null
                      })}
                    </div>

                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
