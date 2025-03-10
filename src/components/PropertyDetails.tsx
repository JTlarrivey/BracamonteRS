import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  Bed,
  Bath,
  Square,
  Check,
  AlertCircle,
} from "lucide-react";
import { Property } from "../types";
import { ImageCarousel } from "./ImageCarousel";

interface PropertyDetailsProps {
  properties: Property[];
}

export function PropertyDetails({ properties }: PropertyDetailsProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(property.price);

  const formattedTaxes = (amount: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-white mb-6 hover:text-gray-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="h-96">
          <ImageCarousel images={property.images} />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {property.address}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Home className="w-5 h-5" />
                <span>{property.location}</span>
                <span className="px-2 py-1 bg-gray-100 rounded-md text-sm font-semibold">
                  {property.type}
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {formattedPrice}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5 text-gray-600" />
              <span>{property.bedrooms} Dormitorios</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5 text-gray-600" />
              <span>{property.bathrooms} Baños</span>
            </div>
            <div className="flex items-center gap-2">
              <Square className="w-5 h-5 text-gray-600" />
              <span>{property.squareMeters}m²</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Descripción</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Características</h2>
              <ul className="grid grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Servicios</h2>
              <ul className="grid grid-cols-2 gap-2">
                {property.services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Impuestos y Deudas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1">Impuestos Mensuales</h3>
                <ul>
                  <li className="flex justify-between">
                    <span>Municipal:</span>
                    <span>{formattedTaxes(property.taxes.municipal)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Provincial:</span>
                    <span>{formattedTaxes(property.taxes.provincial)}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Estado de Deudas</h3>
                {property.hasDebts ? (
                  <div className="flex items-center gap-2 text-red-500">
                    <AlertCircle className="w-4 h-4" />
                    <span>
                      Posee deudas por{" "}
                      {formattedTaxes(property.debtAmount || 0)}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-green-500">
                    <Check className="w-4 h-4" />
                    <span>Sin deudas</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
