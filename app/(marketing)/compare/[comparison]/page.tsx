import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Home, DollarSign, GraduationCap, Users, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { getComparisonData, getComparisonSlugs } from '@/data/comparisons/neighborhood-comparisons'
import { getNeighborhoodBySlug } from '@/data/neighborhoods'
import type { ComparisonData } from '@/types/comparison'

export async function generateStaticParams() {
  const slugs = getComparisonSlugs()
  return slugs.map((slug) => ({
    comparison: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>
}): Promise<Metadata> {
  const { comparison: slug } = await params
  const comparisonData = getComparisonData(slug)

  if (!comparisonData) {
    return {
      title: 'Comparison Not Found',
    }
  }

  return {
    title: comparisonData.title,
    description: comparisonData.metaDescription,
    openGraph: {
      title: comparisonData.title,
      description: comparisonData.metaDescription,
      type: 'article',
    },
  }
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>
}) {
  const { comparison: slug } = await params
  const comparisonData = getComparisonData(slug)

  if (!comparisonData) {
    notFound()
  }

  const neighborhood1 = getNeighborhoodBySlug(comparisonData.neighborhood1Slug)
  const neighborhood2 = getNeighborhoodBySlug(comparisonData.neighborhood2Slug)

  if (!neighborhood1 || !neighborhood2) {
    notFound()
  }

  const data: ComparisonData = {
    neighborhood1,
    neighborhood2,
    comparison: comparisonData,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Neighborhood Comparison
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {data.comparison.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {data.comparison.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Comparison */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Neighborhood 1 Card */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-white">
              <CardTitle className="text-2xl">{data.neighborhood1.name}</CardTitle>
              <CardDescription>{data.neighborhood1.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-600">Price Range</p>
                  <p className="text-lg font-bold text-gray-900">
                    ${(data.neighborhood1.priceRanges.singleFamily.min / 1000).toFixed(0)}K - $
                    {(data.neighborhood1.priceRanges.singleFamily.max / 1000000).toFixed(1)}M
                  </p>
                  <p className="text-sm text-gray-600">
                    Median: ${(data.neighborhood1.priceRanges.singleFamily.median / 1000).toFixed(0)}K
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-600">Top School Rating</p>
                  <p className="text-lg font-bold text-gray-900">
                    {Math.max(...data.neighborhood1.schools.map(s => s.rating || 0))}/10
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-600">Population</p>
                  <p className="text-lg font-bold text-gray-900">
                    {data.neighborhood1.demographics?.population?.toLocaleString() || 'N/A'}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link href={`/neighborhoods/${data.neighborhood1.slug}`}>
                  <Button variant="outline" className="w-full">
                    View {data.neighborhood1.name} Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Neighborhood 2 Card */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-50 to-white">
              <CardTitle className="text-2xl">{data.neighborhood2.name}</CardTitle>
              <CardDescription>{data.neighborhood2.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-600">Price Range</p>
                  <p className="text-lg font-bold text-gray-900">
                    ${(data.neighborhood2.priceRanges.singleFamily.min / 1000).toFixed(0)}K - $
                    {(data.neighborhood2.priceRanges.singleFamily.max / 1000000).toFixed(1)}M
                  </p>
                  <p className="text-sm text-gray-600">
                    Median: ${(data.neighborhood2.priceRanges.singleFamily.median / 1000).toFixed(0)}K
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-600">Top School Rating</p>
                  <p className="text-lg font-bold text-gray-900">
                    {Math.max(...data.neighborhood2.schools.map(s => s.rating || 0))}/10
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-600">Population</p>
                  <p className="text-lg font-bold text-gray-900">
                    {data.neighborhood2.demographics?.population?.toLocaleString() || 'N/A'}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link href={`/neighborhoods/${data.neighborhood2.slug}`}>
                  <Button variant="outline" className="w-full">
                    View {data.neighborhood2.name} Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Differences */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Differences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Side-by-side comparison of the most important factors when choosing between these neighborhoods
          </p>
        </div>

        <div className="space-y-6">
          {data.comparison.keyDifferences.map((diff, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-xl">{diff.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                  <div className="p-6 bg-blue-50/30">
                    <p className="font-semibold text-blue-900 mb-2">{data.neighborhood1.name}</p>
                    <p className="text-gray-700">{diff.neighborhood1Point}</p>
                  </div>
                  <div className="p-6 bg-orange-50/30">
                    <p className="font-semibold text-orange-900 mb-2">{data.neighborhood2.name}</p>
                    <p className="text-gray-700">{diff.neighborhood2Point}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Best For Sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Which Neighborhood Is Right For You?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Neighborhood 1 Best For */}
          <Card className="shadow-lg border-2 border-blue-200">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Home className="w-6 h-6 text-blue-600" />
                {data.neighborhood1.name} Is Best For:
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {data.comparison.bestFor.neighborhood1.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={`/neighborhoods/${data.neighborhood1.slug}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Explore {data.neighborhood1.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Neighborhood 2 Best For */}
          <Card className="shadow-lg border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Home className="w-6 h-6 text-orange-600" />
                {data.neighborhood2.name} Is Best For:
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {data.comparison.bestFor.neighborhood2.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={`/neighborhoods/${data.neighborhood2.slug}`}>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Explore {data.neighborhood2.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized guidance on {data.neighborhood1.name}, {data.neighborhood2.name}, and all Santa Clarita neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/neighborhoods">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-blue-700 hover:bg-gray-100">
                View All Neighborhoods
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* More Comparisons */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Neighborhood Comparisons
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/compare/valencia-vs-stevenson-ranch" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Valencia vs Stevenson Ranch
                </CardTitle>
                <CardDescription>
                  Compare upscale master-planned communities
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/compare/valencia-vs-newhall" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Valencia vs Newhall
                </CardTitle>
                <CardDescription>
                  Modern amenities vs historic character
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/compare/saugus-vs-canyon-country" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Saugus vs Canyon Country
                </CardTitle>
                <CardDescription>
                  Affordable family-friendly options
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
