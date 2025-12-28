import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { leadFormSchema } from '@/lib/validations/lead-form'
import { ZodError } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate with Zod
    const validatedData = leadFormSchema.parse(body)

    // Initialize Supabase client
    const supabase = await createClient()

    // Insert lead into database
    const { data, error } = await supabase
      .from('leads')
      .insert({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone || null,
        budget_min: validatedData.budgetMin || null,
        budget_max: validatedData.budgetMax || null,
        bedrooms: validatedData.bedrooms || null,
        preferred_neighborhoods: validatedData.preferredNeighborhoods || null,
        timeline: validatedData.timeline || null,
        buyer_type: validatedData.buyerType || null,
        comments: validatedData.comments || null,
        source_page: body.sourcePage || null,
        status: 'new',
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead', message: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', issues: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
