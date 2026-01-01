'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { calhfaIncomeLimits, formatIncome } from '@/lib/calhfa-income-limits'
import { DollarSign } from 'lucide-react'

export function CountyIncomeLimits() {
  const [selectedCounty, setSelectedCounty] = useState('Los Angeles')
  const selectedLimit = calhfaIncomeLimits.find((c) => c.county === selectedCounty)

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-premium-blue to-premium-blue-dark rounded-xl flex items-center justify-center flex-shrink-0">
          <DollarSign className="h-6 w-6 text-white" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-1">
            Income Limits by County
          </h4>
          <p className="text-sm text-gray-600">
            Select your county to see the maximum income limit
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="county-select" className="text-sm font-medium text-gray-700 mb-2 block">
            Select County
          </Label>
          <Select value={selectedCounty} onValueChange={setSelectedCounty}>
            <SelectTrigger id="county-select" className="w-full">
              <SelectValue placeholder="Select a county" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {calhfaIncomeLimits.map((county) => (
                <SelectItem key={county.county} value={county.county}>
                  {county.county}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedLimit && (
          <div className="bg-white rounded-lg border-2 border-blue-300 p-4">
            <div className="text-sm font-medium text-gray-600 mb-1">
              Maximum Household Income
            </div>
            <div className="text-3xl font-bold text-premium-blue">
              {formatIncome(selectedLimit.limit)}
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {selectedCounty} County
            </div>
          </div>
        )}

        <div className="text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-200">
          <strong>Note:</strong> Income limits shown are CalHFA Government & Conventional limits (effective 06/09/2025).
        </div>
      </div>
    </Card>
  )
}
