'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Download, GraduationCap, Building2, FileText, Globe } from 'lucide-react';

const officialPrograms = [
  {
    name: 'CalHFA (California Housing Finance Agency)',
    url: 'https://www.calhfa.ca.gov',
    description: 'Official CalHFA website with program details, income limits, and lender directory',
    programs: ['MyHome Assistance', 'CalPLUS with ZIP', 'CalPLUS FHA', 'Extra Credit Teacher Program'],
  },
  {
    name: 'AccessZero FHA Grant Program',
    url: 'https://www.accesszerodownpayment.org',
    description: 'Information about the AccessZero grant program for LA County first-time buyers',
    programs: ['AccessZero FHA Grant (3.5% + 3.5%)'],
  },
  {
    name: 'GSFA (Golden State Finance Authority)',
    url: 'https://www.gsfahome.org',
    description: 'GSFA MyHome Assistance Program details and approved lender list',
    programs: ['GSFA MyHome Assistance'],
  },
];

const educationProviders = [
  {
    name: 'Framework Homeownership',
    type: 'Online',
    cost: '$99',
    url: 'https://www.frameworkhomeownership.org',
    description: 'Approved online homebuyer education - complete at your own pace',
  },
  {
    name: 'eHome America',
    type: 'Online',
    cost: '$75',
    url: 'https://www.ehomeamerica.org',
    description: 'HUD-approved online course, accepted by all major DPA programs',
  },
  {
    name: 'Homeownership Preservation Foundation',
    type: 'Online',
    cost: '$75',
    url: 'https://www.995hope.org',
    description: 'Comprehensive online homebuyer education with certificate',
  },
  {
    name: 'NeighborWorks America',
    type: 'Online & In-Person',
    cost: 'Varies (some free)',
    url: 'https://www.neighborworks.org',
    description: 'National network offering both online and in-person classes',
  },
];

const helpfulResources = [
  {
    icon: FileText,
    title: 'Income Limit Calculator',
    description: 'Check current income limits by county and household size',
    url: 'https://www.calhfa.ca.gov/homebuyer/limits/index.htm',
    category: 'Planning',
  },
  {
    icon: Globe,
    title: 'HUD Approved Lenders',
    description: 'Search for FHA-approved lenders in your area',
    url: 'https://www.hud.gov/program_offices/housing/sfh/lender/lenderlist',
    category: 'Lenders',
  },
  {
    icon: FileText,
    title: 'First-Time Buyer Guide',
    description: 'Comprehensive guide to the home buying process (PDF)',
    url: '#',
    category: 'Education',
    isDownload: true,
  },
  {
    icon: Building2,
    title: 'FHA Property Requirements',
    description: 'What properties qualify for FHA financing',
    url: 'https://www.hud.gov/program_offices/housing/sfh/ins/203b',
    category: 'Requirements',
  },
];

const localLenders = [
  {
    name: 'John Yang',
    company: 'loanDepot',
    specialty: 'CalHFA, FHA, Conventional',
    phone: '(661) 451-7200',
    email: 'jyang@loandepot.com',
    experience: '15+ years helping Santa Clarita buyers',
  },
];

export function DPAResources() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            DPA <span className="text-gradient-premium">Resources</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Everything you need to research, apply for, and successfully use down payment assistance
          </p>
        </div>

        {/* Official Program Websites */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-premium-blue flex items-center justify-center">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900">Official Program Websites</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {officialPrograms.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-premium transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-3">{program.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-700 mb-2">Programs Offered:</div>
                  <div className="flex flex-wrap gap-1">
                    {program.programs.map((prog, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {prog}
                      </Badge>
                    ))}
                  </div>
                </div>
                <a href={program.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Homebuyer Education Providers */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-premium-green flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900">
              Approved Homebuyer Education Providers
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {educationProviders.map((provider, index) => (
              <Card key={index} className="p-6 hover:shadow-premium transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-gray-900">{provider.name}</h4>
                  <Badge className="bg-premium-green text-white">{provider.cost}</Badge>
                </div>
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs">
                    {provider.type}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">{provider.description}</p>
                <a href={provider.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    Register for Course
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </Card>
            ))}
          </div>
          <Card className="mt-6 p-6 bg-blue-50 border-blue-200">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Note:</strong> All providers listed are HUD-approved and accepted by
              CalHFA, AccessZero, and GSFA programs. Complete your education course before making an offer to ensure
              you&apos;re ready to move quickly.
            </p>
          </Card>
        </div>

        {/* Helpful Resources */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-premium-orange flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900">Helpful Resources & Tools</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpfulResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-premium transition-shadow duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-premium-cream flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-premium-blue" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-2">
                        {resource.category}
                      </Badge>
                      <h4 className="font-semibold text-gray-900 text-sm">{resource.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-4">{resource.description}</p>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full gap-2 text-xs">
                      {resource.isDownload ? (
                        <>
                          Download
                          <Download className="h-3 w-3" />
                        </>
                      ) : (
                        <>
                          View Resource
                          <ExternalLink className="h-3 w-3" />
                        </>
                      )}
                    </Button>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Local DPA Lenders */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-premium-blue flex items-center justify-center">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900">
              Recommended DPA Lender in Santa Clarita
            </h3>
          </div>
          <div className="grid md:grid-cols-1 gap-6">
            {localLenders.map((lender, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-r from-premium-blue to-premium-blue-dark text-white shadow-premium-lg"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-display text-2xl font-bold mb-2">{lender.name}</h4>
                    <p className="text-white/90 mb-4">{lender.company}</p>
                    <div className="mb-4">
                      <div className="text-sm text-white/80 mb-1">Specialties:</div>
                      <div className="flex flex-wrap gap-2">
                        {lender.specialty.split(', ').map((spec, idx) => (
                          <Badge key={idx} className="bg-white/20 text-white border-white/30">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-white/90 italic">{lender.experience}</p>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <a href={`tel:${lender.phone.replace(/\D/g, '')}`}>
                      <Button size="lg" className="w-full bg-white text-premium-blue hover:bg-premium-cream font-bold">
                        {lender.phone}
                      </Button>
                    </a>
                    <a href={`mailto:${lender.email}`}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue font-bold"
                      >
                        {lender.email}
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-6 p-6 bg-orange-50 border-orange-200">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Why Work with a DPA-Experienced Lender?</strong> Not all lenders are
              familiar with DPA programs. Working with an experienced DPA lender ensures: faster processing, proper
              program selection, fund reservation (programs can run out), competitive rates, and smooth closing. We
              partner with lenders who have successfully closed hundreds of DPA loans in Santa Clarita.
            </p>
          </Card>
        </div>

        {/* Downloadable Checklist */}
        <Card className="mt-16 p-8 bg-gradient-to-r from-premium-cream to-white border-2 border-premium-gold">
          <div className="text-center max-w-3xl mx-auto">
            <Download className="h-12 w-12 text-premium-blue mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
              DPA Application Checklist (Coming Soon)
            </h3>
            <p className="text-gray-600 mb-6">
              Download our comprehensive checklist covering all documents needed for DPA application, timeline
              expectations, and pro tips from experienced buyers.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-premium-blue to-premium-blue-dark" disabled>
              <Download className="mr-2 h-5 w-5" />
              Download Free Checklist (PDF)
            </Button>
            <p className="text-xs text-gray-500 mt-4">
              Or contact us directly for a personalized document checklist based on your specific situation
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
