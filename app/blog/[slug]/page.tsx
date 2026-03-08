import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getPostSlugs, getAllPosts } from '@/data/blog'
import { getCategoryBySlug } from '@/data/blog/categories'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { ArticleSchema } from '@/components/shared/article-schema'
import { FAQJsonLd } from '@/components/shared/json-ld'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, ArrowRight, Share2 } from 'lucide-react'
import { MarkdownContent } from '@/components/blog/markdown-content'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const category = getCategoryBySlug(post.category)
  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div>
      <ArticleSchema
        headline={post.title}
        description={post.metaDescription}
        keywords={post.keywords}
        datePublished={post.publishedDate}
        dateModified={post.updatedDate || post.publishedDate}
        authorName={post.author}
      />
      {post.faqs && post.faqs.length > 0 && (
        <FAQJsonLd faqs={post.faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-premium-blue to-premium-blue-dark py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {category && (
            <Badge className={`bg-gradient-to-r ${category.color} text-white border-0 mb-4`}>
              {category.name}
            </Badge>
          )}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarkdownContent content={post.content} />

          {/* FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-10 border-t">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-gray-200 bg-gray-50 open:bg-white open:shadow-sm transition-all duration-200"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 font-semibold text-gray-900 list-none">
                      <span>{faq.question}</span>
                      <span className="mt-0.5 shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200 text-lg leading-none">
                        ↓
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">Tagged with:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Share this article</h3>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-lg border-2 border-gray-100 hover:border-premium-blue p-6 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-premium-blue transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {relatedPost.readTime} min read
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-premium-blue to-premium-blue-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Move?</h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert guidance on buying a home in Santa Clarita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-white text-premium-blue hover:bg-gray-100">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/guides/first-time-buyer">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white/10"
              >
                First-Time Buyer Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
