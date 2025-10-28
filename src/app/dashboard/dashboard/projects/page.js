//src/app/dashboard/dashboard/articles/page.js
'use client'

import { useState } from 'react'
import { useData } from '../../contexts/DataContext'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../../../../components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table'
import { Plus, Pencil, Trash2, Search } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

export default function ProjectsPage() {
  const { projects, updateProjects } = useData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    status: 'Planning',
    client: '',
    budget: ''
  })

  const handleAdd = () => {
    setEditingProject(null)
    setFormData({ name: '', status: 'Planning', client: '', budget: '' })
    setIsModalOpen(true)
  }

  const handleEdit = (project) => {
    setEditingProject(project)
    setFormData(project)
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      updateProjects(projects.filter(p => p.id !== id))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingProject) {
      updateProjects(projects.map(p => p.id === editingProject.id ? { ...formData, id: p.id } : p))
    } else {
      updateProjects([...projects, { ...formData, id: uuidv4() }])
    }
    
    setIsModalOpen(false)
  }

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.client.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your project portfolio</p>
        </div>
        <Button
          onClick={handleAdd}
          className="bg-[#CBFE33] hover:bg-[#70E000] text-gray-900 shadow-lg shadow-[#CBFE33]/20"
        >
          <Plus className="mr-2" size={20} />
          Add Project
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 rounded-xl dark:bg-gray-900"
        />
      </div>

      {/* Table */}
      <div className="dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
              <TableHead className="font-semibold">Project Name</TableHead>
              <TableHead className="font-semibold">Client</TableHead>
              <TableHead className="font-semibold">Budget</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  No projects found
                </TableCell>
              </TableRow>
            ) : (
              filteredProjects.map((project) => (
                <TableRow key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{project.budget}</TableCell>
                  <TableCell>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' ? 'bg-[#70E000]/20 text-[#70E000]' :
                      project.status === 'In Progress' ? 'bg-[#CBFE33]/20 text-gray-900' :
                      'bg-[#FAF000]/20 text-gray-900'
                    }`}>
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(project)}
                        className="hover:bg-[#CBFE33]/20"
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(project.id)}
                        className="hover:bg-red-100 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client">Client</Label>
                <Input
                  id="client"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="$50,000"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Planning">Planning</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="On Hold">On Hold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
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
                className="bg-[#CBFE33] hover:bg-[#70E000] text-gray-900 rounded-xl"
              >
                {editingProject ? 'Update' : 'Create'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}