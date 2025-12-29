'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function DPAHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-premium-blue via-premium-blue-dark to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 text-sm font-medium text-white"
          >
            <CheckCircle2 className="h-4 w-4 text-premium-orange" />
            Helping hundreds of families achieve homeownership since 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6"
          >
            Down Payment Assistance
            <br />
            <span className="text-gradient-warm">Programs in Santa Clarita</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl sm:text-2xl text-white/90 leading-relaxed mb-12"
          >
            Get up to <strong className="text-premium-orange">$110,000+</strong> in down payment help for your Santa Clarita home
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 mb-16"
          >
            <Link href="#dpa-calculator">
              <Button
                size="lg"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white text-premium-blue hover:bg-premium-cream shadow-premium-lg hover:shadow-premium transition-all duration-300 hover:scale-110"
              >
                Check Your Eligibility
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:6614517200">
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue transition-all duration-300 hover:scale-110"
              >
                <Phone className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
                (661) 451-7200
              </Button>
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '$110,000+', label: 'Maximum Assistance Available' },
              { value: '0% Interest', label: 'On Many DPA Programs' },
              { value: '3 Programs', label: 'CalHFA, AccessZero, GSFA' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
