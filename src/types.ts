export type PropertyType =
  | "departamento"
  | "monoambiente"
  | "duplex"
  | "PH"
  | "Casa"
  | "Propiedad Rural";
export type Location =
  | "City Bell"
  | "La Plata"
  | "Gonnet"
  | "Ringuelet"
  | "Villa Elisa"
  | "El Rincón";

export interface Property {
  id: string;
  type: PropertyType;
  location: Location;
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
