import { Metadata } from 'next';
import { CheckCircle, Home, BookOpen, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | Santa Clarita Buyers Guide',
  description: 'Thank you for your interest in Santa Clarita real estate.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { name?: string; source?: string };
}) {
  const name = searchParams.name || 'there';

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-2xl">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Thank You, {name}!
          </h1>

          <p className="text-xl text-gray-600">
            We&apos;ve received your information and one of our affiliated real estate professionals will be in touch soon.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">We Review Your Information</h3>
                <p className="text-gray-600">Our team is reviewing your submission and matching you with the best real estate professional for your needs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Expect Contact Within 24 Hours</h3>
                <p className="text-gray-600">An affiliated real estate agent will reach out via phone, email, or text within 1 business day to discuss your home buying goals.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Start Your Home Search</h3>
                <p className="text-gray-600">Your agent will guide you through the process, show you homes, and help you find your dream home in Santa Clarita.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Check Your Email */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex gap-3">
            <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
              <p className="text-gray-700 text-sm">
                We&apos;ve sent a confirmation email with additional resources and next steps.
                If you don&apos;t see it, check your spam folder.
              </p>
            </div>
          </div>
        </div>

        {/* Continue Exploring */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            While You Wait, Continue Exploring
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/neighborhoods" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Explore Neighborhoods</h4>
              <p className="text-sm text-gray-600">Learn about all 6 Santa Clarita areas</p>
            </Link>

            <Link href="/guides" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Read Buyer Guides</h4>
              <p className="text-sm text-gray-600">Get expert home buying advice</p>
            </Link>
          </div>
        </div>

        {/* Need Immediate Help */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
          <p className="text-gray-300 mb-6">Give us a call and we&apos;ll connect you right away</p>

          <a
            href="tel:6614517200"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-lg hover:scale-105 transition-all shadow-xl"
          >
            <Phone className="w-5 h-5" />
            (661) 451-7200
          </a>
        </div>

      </div>
    </div>
  );
}
