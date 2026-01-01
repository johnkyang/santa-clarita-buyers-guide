import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getResourceById, getAllResources, getCategoryBySlug } from '@/data/resources'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Download,
  FileText,
  Users,
  Calendar,
  Tag,
  CheckCircle2,
  ArrowLeft,
  Star,
  FileSpreadsheet,
} from 'lucide-react'
import { ResourceDownloadForm } from '@/components/resources/resource-download-form'

interface ResourcePageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const resources = getAllResources()
  return resources.map((resource) => ({
    id: resource.id,
  }))
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resource = getResourceById(params.id)

  if (!resource) {
    return {}
  }

  return {
    title: `${resource.title} - Free Download | Santa Clarita Buyers Guide`,
    description: resource.description,
    keywords: resource.tags,
  }
}

const fileTypeColors: Record<string, string> = {
  PDF: 'bg-red-100 text-red-700 border-red-200',
  Excel: 'bg-green-100 text-green-700 border-green-200',
  Word: 'bg-blue-100 text-blue-700 border-blue-200',
}

export default function ResourcePage({ params }: ResourcePageProps) {
  const resource = getResourceById(params.id)

  if (!resource) {
    notFound()
  }

  const category = getCategoryBySlug(resource.category)
  const relatedResources = getAllResources()
    .filter((r) => r.id !== resource.id && r.category === resource.category)
    .slice(0, 3)

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: 'Resources', href: '/resources' },
              { label: resource.title, href: `/resources/${resource.id}` },
            ]}
          />
        </div>
      </div>

      {/* Resource Details */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Resource Info */}
            <div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-premium-blue hover:underline mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </Link>

              <div className="flex items-center gap-3 mb-4">
                {resource.featured && (
                  <Badge className="bg-yellow-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge className={`border-2 ${fileTypeColors[resource.fileType]}`}>
                  {resource.fileType}
                </Badge>
                {category && (
                  <Badge variant="outline">{category.name}</Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-6">{resource.title}</h1>

              <p className="text-xl text-gray-700 mb-8">
                {resource.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg border-2">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">File Size</span>
                  </div>
                  <p className="text-lg font-semibold">{resource.fileSize}</p>
                </div>
                {resource.downloadCount && (
                  <div className="bg-white p-4 rounded-lg border-2">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Downloads</span>
                    </div>
                    <p className="text-lg font-semibold">{resource.downloadCount.toLocaleString()}</p>
                  </div>
                )}
                <div className="bg-white p-4 rounded-lg border-2">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Updated</span>
                  </div>
                  <p className="text-lg font-semibold">
                    {new Date(resource.updatedDate || resource.createdDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <FileSpreadsheet className="w-4 h-4" />
                    <span className="text-sm">Format</span>
                  </div>
                  <p className="text-lg font-semibold">{resource.fileType}</p>
                </div>
              </div>

              {/* Tags */}
              {resource.tags && resource.tags.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-gray-600" />
                    <h3 className="font-semibold text-gray-600">Topics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* What You'll Get */}
              <Card className="border-2 border-green-200 bg-green-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle2 className="w-5 h-5" />
                    What You&apos;ll Get
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Instant download - no waiting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Professionally designed and easy to use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Print or save digitally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>100% free - no credit card required</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Download Form */}
            <div>
              <div className="sticky top-8">
                <Card className="border-2 border-premium-blue shadow-xl">
                  <CardHeader className="bg-gradient-to-br from-premium-blue to-premium-blue-dark text-white rounded-t-lg">
                    <CardTitle className="text-2xl">Download for Free</CardTitle>
                    <CardDescription className="text-white/90">
                      Enter your email to get instant access to this resource
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ResourceDownloadForm
                      resourceId={resource.id}
                      resourceTitle={resource.title}
                    />
                  </CardContent>
                </Card>

                <p className="text-center text-sm text-gray-600 mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              More {category?.name || 'Resources'}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedResources.map((related) => (
                <Link key={related.id} href={`/resources/${related.id}`} className="group">
                  <Card className="h-full border-2 hover:border-premium-blue hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={fileTypeColors[related.fileType]}>
                          {related.fileType}
                        </Badge>
                        {related.featured && (
                          <Star className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                      <CardTitle className="group-hover:text-premium-blue transition-colors">
                        {related.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {related.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full group-hover:bg-premium-blue group-hover:text-white group-hover:border-premium-blue">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
