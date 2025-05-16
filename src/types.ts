export type PropertyType =
  | "Departamento"
  | "Monoambiente"
  | "Duplex"
  | "PH"
  | "Casa"
  | "Local"
  | "Terreno"
  | "Rural";

export interface Property {
  id: string;
  type: PropertyType;
  location: string;
  address: string;
  price: number;
  description: string;
  images: string[];
  services: string[];
  taxes: {
    municipal: number;
    provincial: number;
  };
  hasDebts: boolean;
  debtAmount?: number;
  features: string[];
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
}
