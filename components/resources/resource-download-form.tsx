'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Download, CheckCircle2, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const downloadFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
})

type DownloadFormData = z.infer<typeof downloadFormSchema>

interface ResourceDownloadFormProps {
  resourceId: string
  resourceTitle: string
}

export function ResourceDownloadForm({ resourceId, resourceTitle }: ResourceDownloadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [downloadReady, setDownloadReady] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DownloadFormData>({
    resolver: zodResolver(downloadFormSchema),
  })

  const onSubmit = async (data: DownloadFormData) => {
    setIsSubmitting(true)

    try {
      // Save the lead to Supabase
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          sourcePage: `/resources/${resourceId}`,
          buyerType: 'resource-download',
          comments: `Downloaded: ${resourceTitle}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save lead')
      }

      // Show success state
      setDownloadReady(true)

      toast({
        title: 'Success!',
        description: 'Your download is ready. Click the button below to get your resource.',
      })

      // Auto-trigger download after a brief moment
      setTimeout(() => {
        window.open(`/downloads/${resourceId}.pdf`, '_blank')
      }, 1000)
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (downloadReady) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">You&apos;re All Set!</h3>
        <p className="text-gray-600 mb-6">
          Your download should start automatically. If it doesn&apos;t, click the button below.
        </p>
        <Button
          onClick={() => window.open(`/downloads/${resourceId}.pdf`, '_blank')}
          size="lg"
          className="w-full bg-premium-blue hover:bg-premium-blue-dark"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Now
        </Button>
        <p className="text-sm text-gray-500 mt-4">
          Check your email for a copy of this resource and more helpful tips!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="firstName">First Name *</Label>
        <Input
          id="firstName"
          {...register('firstName')}
          placeholder="John"
          className={errors.firstName ? 'border-red-500' : ''}
          disabled={isSubmitting}
        />
        {errors.firstName && (
          <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="lastName">Last Name *</Label>
        <Input
          id="lastName"
          {...register('lastName')}
          placeholder="Smith"
          className={errors.lastName ? 'border-red-500' : ''}
          disabled={isSubmitting}
        />
        {errors.lastName && (
          <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="john@example.com"
          className={errors.email ? 'border-red-500' : ''}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          By downloading, you&apos;ll also receive helpful home buying tips and Santa Clarita market updates (unsubscribe anytime).
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-premium-blue hover:bg-premium-blue-dark h-14 text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Download className="w-5 h-5 mr-2" />
            Get Instant Access
          </>
        )}
      </Button>

      <p className="text-xs text-center text-gray-500">
        We respect your privacy and will never share your information.
      </p>
    </form>
  )
}
