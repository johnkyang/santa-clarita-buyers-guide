import { Metadata } from 'next'
import { LeadCaptureForm } from '@/components/forms/lead-capture-form'
import { Phone, MapPin, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contact Us | Get Started With Your Santa Clarita Home Search',
  description:
    'Contact our team for personalized guidance on buying a home in Santa Clarita. Expert help with new construction, resale homes, and 55+ communities.',
  keywords: [
    'contact Santa Clarita real estate',
    'Santa Clarita home buyer agent',
    'new construction consultant',
    'real estate help Santa Clarita',
  ],
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get Started Today</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ready to start your Santa Clarita home search? Fill out the form below and one of our affiliated
          real estate professionals will get back to you within 24 hours.
        </p>
      </section>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:6614517200" className="text-muted-foreground hover:text-primary">
                    (661) 451-7200
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Service Area</div>
                  <div className="text-muted-foreground">
                    Santa Clarita, CA
                    <br />
                    Valencia, Newhall, Saugus
                    <br />
                    Canyon Country, Stevenson Ranch, Castaic
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Hours</div>
                  <div className="text-muted-foreground">
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: 10am - 4pm
                    <br />
                    Sunday: By appointment
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-muted/50 p-6">
            <h3 className="mb-2 font-semibold">What Happens Next?</h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-semibold text-primary">1.</span>
                <span>We review your information and match you with an affiliated real estate professional</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">2.</span>
                <span>A licensed agent will contact you within 24 hours</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">3.</span>
                <span>Schedule a consultation to discuss your home buying goals</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">4.</span>
                <span>Start your journey to finding your perfect Santa Clarita home!</span>
              </li>
            </ol>
          </Card>
        </div>

        {/* Lead Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 sm:p-8">
            <h2 className="mb-6 text-2xl font-bold">Tell Us About Your Home Search</h2>
            <LeadCaptureForm source="contact-page" />
          </Card>
        </div>
      </div>
    </div>
  )
}
