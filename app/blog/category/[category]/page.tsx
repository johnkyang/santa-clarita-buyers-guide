import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostsByCategory } from '@/data/blog'
import { blogCategories, getCategoryBySlug } from '@/data/blog/categories'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, BookOpen, ArrowLeft } from 'lucide-react'

interface Props {
  params: { category: string }
}

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({ category: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.category)
  if (!category) return {}

  return {
    title: `${category.name} | Santa Clarita Real Estate Blog`,
    description: category.description,
  }
}

export default function BlogCategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.category)
  if (!category) notFound()

  const posts = getPostsByCategory(params.category)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-premium-blue to-premium-blue-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{category.name}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/blog">
              <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:scale-105 transition-transform hover:border-premium-blue">
                All Posts
              </Badge>
            </Link>
            {blogCategories.map((cat) => (
              <Link key={cat.slug} href={`/blog/category/${cat.slug}`}>
                <Badge
                  variant={cat.slug === params.category ? 'default' : 'outline'}
                  className="px-4 py-2 text-sm cursor-pointer hover:scale-105 transition-transform hover:border-premium-blue"
                >
                  {cat.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-premium-blue hover:underline text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full border-2 border-gray-100 hover:border-premium-blue hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <Badge className={`w-fit bg-gradient-to-r ${category.color} text-white border-0 mb-3`}>
                        {category.name}
                      </Badge>
                      <CardTitle className="text-2xl group-hover:text-premium-blue transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min read
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-premium-blue group-hover:text-white transition-all justify-between"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-6">No posts in this category yet. Check back soon.</p>
              <Link href="/blog">
                <Button variant="outline">Browse all posts</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-premium-blue to-premium-blue-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Home Search?</h2>
          <p className="text-xl text-white/90 mb-8">
            Get personalized guidance and access to exclusive Santa Clarita listings
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-lg font-bold bg-white text-premium-blue hover:bg-gray-100">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
