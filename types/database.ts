export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          budget_min: number | null
          budget_max: number | null
          bedrooms: number | null
          preferred_neighborhoods: string[] | null
          timeline: string | null
          buyer_type: string | null
          comments: string | null
          source_page: string | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          budget_min?: number | null
          budget_max?: number | null
          bedrooms?: number | null
          preferred_neighborhoods?: string[] | null
          timeline?: string | null
          buyer_type?: string | null
          comments?: string | null
          source_page?: string | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          budget_min?: number | null
          budget_max?: number | null
          bedrooms?: number | null
          preferred_neighborhoods?: string[] | null
          timeline?: string | null
          buyer_type?: string | null
          comments?: string | null
          source_page?: string | null
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
