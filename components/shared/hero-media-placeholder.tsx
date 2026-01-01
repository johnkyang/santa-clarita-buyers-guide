import { Image as ImageIcon } from 'lucide-react'

interface HeroMediaPlaceholderProps {
  title?: string
  variant?: 'community' | 'guide'
  className?: string
}

export function HeroMediaPlaceholder({
  title = 'Photo Placeholder',
  variant = 'community',
  className = ''
}: HeroMediaPlaceholderProps) {
  const gradients = {
    community: 'from-premium-blue via-blue-600 to-premium-blue-dark',
    guide: 'from-premium-orange via-orange-600 to-premium-rust'
  }

  return (
    <div
      className={`relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br ${gradients[variant]} ${className}`}
      aria-label={title}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white/40 z-10">
          <ImageIcon className="w-20 h-20 mx-auto mb-4" strokeWidth={1.5} />
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs mt-1">Image placeholder</p>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
    </div>
  )
}
