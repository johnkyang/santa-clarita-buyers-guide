import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Home,
  AlertCircle,
  Award,
  TrendingUp,
  Target,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getBuyerTypeGuideBySlug, getBuyerTypeGuideSlugs } from '@/data/buyer-types/buyer-type-guides'
import { getNeighborhoodBySlug } from '@/data/neighborhoods'

export async function generateStaticParams() {
  const slugs = getBuyerTypeGuideSlugs()
  return slugs.map((slug) => ({
    type: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>
}): Promise<Metadata> {
  const { type: slug } = await params
  const guide = getBuyerTypeGuideBySlug(slug)

  if (!guide) {
    return {
      title: 'Buyer Guide Not Found',
    }
  }

  return {
    title: guide.title,
    description: guide.metaDescription,
    keywords: guide.keywords,
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      type: 'article',
    },
  }
}

export default async function BuyerTypePage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type: slug } = await params
  const guide = getBuyerTypeGuideBySlug(slug)

  if (!guide) {
    notFound()
  }

  const recommendedNeighborhoods = guide.recommendedNeighborhoods.map((rec) => {
    const neighborhood = getNeighborhoodBySlug(rec.slug)
    return {
      ...rec,
      neighborhood,
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              {guide.title}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {guide.heroTitle}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {guide.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Common Challenges
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Understanding the obstacles you may face helps you prepare and overcome them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {guide.challenges.map((challenge, index) => (
            <Card key={index} className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>{challenge.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Your Advantages
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Leverage these benefits to make your Santa Clarita home purchase successful
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guide.benefits.map((benefit, index) => (
              <Card key={index} className="border-l-4 border-l-green-500 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{benefit.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Neighborhoods */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Best Neighborhoods For You
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            These Santa Clarita neighborhoods are ideal for your buyer profile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {recommendedNeighborhoods.map((rec, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {rec.neighborhood?.name || rec.slug}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {rec.pricePoint}
                    </Badge>
                  </div>
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardDescription className="text-base">
                  {rec.neighborhood?.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Why This Neighborhood:</p>
                  <p className="text-gray-700">{rec.reason}</p>
                </div>
                <Link href={`/neighborhoods/${rec.slug}`}>
                  <Button className="w-full" variant="outline">
                    Explore {rec.neighborhood?.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Action Steps */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Your Step-by-Step Action Plan
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Follow these steps to successfully buy your Santa Clarita home
            </p>
          </div>

          <div className="space-y-6">
            {guide.actionSteps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base text-gray-700">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {guide.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {guide.ctaTitle}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {guide.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Personalized Guidance
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/neighborhoods">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white text-orange-700 hover:bg-gray-100"
              >
                Browse All Neighborhoods
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* More Buyer Guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Buyer Guides
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <Link href="/buyers/first-time" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  First-Time Buyers
                </CardTitle>
                <CardDescription>
                  Down payment assistance & starter homes
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/buyers/move-up" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Move-Up Buyers
                </CardTitle>
                <CardDescription>
                  Upgrade to your dream home
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/buyers/senior-55-plus" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Senior & 55+
                </CardTitle>
                <CardDescription>
                  Active adult communities
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/buyers/investor" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Investors
                </CardTitle>
                <CardDescription>
                  Investment property analysis
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
