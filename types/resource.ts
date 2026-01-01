export interface DownloadableResource {
  id: string
  title: string
  description: string
  category: ResourceCategory
  fileType: 'PDF' | 'Excel' | 'Word'
  fileSize: string
  downloadUrl: string
  thumbnailImage?: string
  featured: boolean
  downloadCount?: number
  createdDate: string
  updatedDate?: string
  tags: string[]
}

export type ResourceCategory =
  | 'checklists'
  | 'guides'
  | 'worksheets'
  | 'market-reports'
  | 'neighborhood-profiles'

export interface ResourceCategoryInfo {
  slug: ResourceCategory
  name: string
  description: string
  icon: string
}
