export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          [x: string]:
            | string
            | number
            | boolean
            | string[]
            | number[]
            | null
            | undefined;
          id: string;
          title: string;
          property_type: string;
          location: string;
          city: string | null;
          state: string | null;
          price: number;
          description: string;
          images: string[];
          square_meters: number;
          bedrooms: number;
          bathrooms: number;
          amenities: string[];
          status: "disponible" | "pendiente" | "vendido" | "alquilado";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          property_type: string;
          location: string;
          city?: string | null;
          state?: string | null;
          price: number;
          description: string;
          images?: string[];
          square_meters: number;
          bedrooms: number;
          bathrooms: number;
          amenities?: string[];
          status?: "disponible" | "pendiente" | "vendido" | "alquilado";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          property_type?: string;
          location?: string;
          city?: string | null;
          state?: string | null;
          price?: number;
          description?: string;
          images?: string[];
          square_meters?: number;
          bedrooms?: number;
          bathrooms?: number;
          amenities?: string[];
          status?: "disponible" | "pendiente" | "vendido" | "alquilado";
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
