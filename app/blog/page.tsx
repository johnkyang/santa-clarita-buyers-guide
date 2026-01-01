import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/data/blog'
import { blogCategories } from '@/data/blog/categories'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Santa Clarita Real Estate Blog | Market Updates & Buying Tips',
  description: 'Expert insights on Santa Clarita real estate, market trends, neighborhood guides, and home buying tips. Stay informed about the SCV housing market.',
  keywords: [
    'Santa Clarita real estate blog',
    'Santa Clarita housing market',
    'home buying tips',
    'neighborhood guides',
    'CalHFA updates',
  ],
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-premium-blue to-premium-blue-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Expert Insights</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Santa Clarita Real Estate Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Market updates, buying tips, neighborhood guides, and insider knowledge about Santa Clarita Valley real estate
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/blog">
              <Badge variant="default" className="px-4 py-2 text-sm cursor-pointer hover:scale-105 transition-transform">
                All Posts
              </Badge>
            </Link>
            {blogCategories.map((category) => (
              <Link key={category.slug} href={`/blog/category/${category.slug}`}>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm cursor-pointer hover:scale-105 transition-transform hover:border-premium-blue"
                >
                  {category.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const category = blogCategories.find((cat) => cat.slug === post.category)

              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full border-2 border-gray-100 hover:border-premium-blue hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      {category && (
                        <Badge className={`w-fit bg-gradient-to-r ${category.color} text-white border-0 mb-3`}>
                          {category.name}
                        </Badge>
                      )}
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
              )
            })}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts found. Check back soon!</p>
            </div>
          )}
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
