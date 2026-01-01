import { Metadata } from 'next'
import Link from 'next/link'
import { getAllResources, getFeaturedResources, resourceCategories } from '@/data/resources'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Download,
  FileText,
  CheckSquare,
  BookOpen,
  FileSpreadsheet,
  TrendingUp,
  MapPin,
  Star,
  Users,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Home Buying Resources & Downloads | Santa Clarita Buyers Guide',
  description: 'Download free checklists, guides, worksheets, and market reports for Santa Clarita home buyers. Expert resources to help you through every step of the home buying process.',
  keywords: [
    'home buying checklist',
    'first-time buyer guide',
    'Santa Clarita market report',
    'home buying resources',
    'free download',
  ],
}

const iconMap = {
  CheckSquare,
  BookOpen,
  FileSpreadsheet,
  TrendingUp,
  MapPin,
}

const fileTypeColors: Record<string, string> = {
  PDF: 'bg-red-100 text-red-700',
  Excel: 'bg-green-100 text-green-700',
  Word: 'bg-blue-100 text-blue-700',
}

export default function ResourcesPage() {
  const allResources = getAllResources()
  const featuredResources = getFeaturedResources()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-premium-blue to-premium-blue-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Free Resources</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Home Buying Resources & Downloads
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Free checklists, guides, and tools to help you navigate the Santa Clarita real estate market with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold">Featured Resources</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => {
              const category = resourceCategories.find((cat) => cat.slug === resource.category)
              const Icon = category ? iconMap[category.icon as keyof typeof iconMap] : FileText

              return (
                <Card key={resource.id} className="border-2 border-yellow-200 bg-yellow-50/30 hover:border-premium-blue hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-premium-blue/10 rounded-lg">
                        <Icon className="w-6 h-6 text-premium-blue" />
                      </div>
                      <Badge className={fileTypeColors[resource.fileType]}>
                        {resource.fileType}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription className="text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {resource.fileSize}
                      </span>
                      {resource.downloadCount && (
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {resource.downloadCount.toLocaleString()} downloads
                        </span>
                      )}
                    </div>
                    <Link href={`/resources/${resource.id}`}>
                      <Button className="w-full bg-premium-blue hover:bg-premium-blue-dark">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {resourceCategories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap]
              const categoryResources = allResources.filter((r) => r.category === category.slug)

              return (
                <Card key={category.slug} className="border-2 hover:border-premium-blue hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="p-3 bg-premium-blue/10 rounded-lg w-fit mb-3">
                      <Icon className="w-6 h-6 text-premium-blue" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {categoryResources.length} resources
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">All Resources</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allResources.map((resource) => {
              const category = resourceCategories.find((cat) => cat.slug === resource.category)
              const Icon = category ? iconMap[category.icon as keyof typeof iconMap] : FileText

              return (
                <Card key={resource.id} className="border-2 hover:border-premium-blue hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex gap-2">
                        {resource.featured && (
                          <Badge className="bg-yellow-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge className={fileTypeColors[resource.fileType]}>
                          {resource.fileType}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      {category && (
                        <Badge variant="outline" className="text-xs">
                          {category.name}
                        </Badge>
                      )}
                      <span className="text-xs text-gray-500">{resource.fileSize}</span>
                    </div>
                    <Link href={`/resources/${resource.id}`}>
                      <Button variant="outline" className="w-full hover:bg-premium-blue hover:text-white hover:border-premium-blue">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-premium-blue to-premium-blue-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Home Search?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get personalized guidance and access to exclusive Santa Clarita listings
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-bold bg-white text-premium-blue hover:bg-gray-100"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
