'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ExternalLink, BadgeDollarSign, CheckCircle2 } from 'lucide-react';

export function LenderHero() {
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
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-bold text-white shadow-lg"
          >
            <BadgeDollarSign className="h-5 w-5" />
            Get $500 Closing Costs Credit - Limited Time Offer!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6"
          >
            Get Pre-Approved for Your
            <br />
            <span className="text-gradient-warm">Santa Clarita Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl sm:text-2xl text-white/90 leading-relaxed mb-4"
          >
            Work with an experienced local lender who specializes in <strong className="text-white">DPA programs, FHA, VA, and Conventional loans</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto max-w-2xl text-lg text-white/80 leading-relaxed mb-12"
          >
            Mention <strong className="text-premium-orange">SantaClaritaBuyersGuide.com</strong> and receive a <strong className="text-premium-orange">$500 closing costs credit</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 mb-16"
          >
            <a href="https://www.loandepot.com/jyang" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white text-premium-blue hover:bg-premium-cream shadow-premium-lg hover:shadow-premium transition-all duration-300 hover:scale-110"
              >
                Start Your Application Now
                <ExternalLink className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="tel:8184456354">
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue transition-all duration-300 hover:scale-110"
              >
                <Phone className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
                (818) 445-6354
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
              { icon: CheckCircle2, label: 'CalHFA Approved Lender' },
              { icon: CheckCircle2, label: 'DPA Program Expert' },
              { icon: CheckCircle2, label: 'FHA, VA & Conventional' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <Icon className="h-8 w-8 text-premium-orange mx-auto mb-3" />
                  <div className="text-base text-white font-medium">
                    {item.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
