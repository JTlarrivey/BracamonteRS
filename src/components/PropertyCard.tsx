import { useNavigate } from "react-router-dom";
import { Home, Bed, Bath, Square } from "lucide-react";
import { Property } from "../types";
import { ImageCarousel } from "./ImageCarousel";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(property.price);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className="relative h-48">
        <ImageCarousel images={property.images} />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm font-semibold text-gray-800">
          {property.type}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Home className="w-4 h-4 text-gray-600" />
          <span className="text-gray-600">{property.location}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {property.address}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {property.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">
                {property.bathrooms}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">
                {property.squareMeters}m²
              </span>
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-800">{formattedPrice}</div>
      </div>
    </div>
  );
}
