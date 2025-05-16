import { useNavigate } from "react-router-dom";
import {
  Home,
  MapPin,
  BedDouble,
  Bath,
  Square as SquareFeet,
} from "lucide-react";
import type { Database } from "../../src/types/supabase";

type Property = Database["public"]["Tables"]["properties"]["Row"];

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const navigate = useNavigate();

  const formatLocation = () => {
    const parts = [];
    if (property.location) parts.push(property.location);
    if (property.city) parts.push(property.city);
    if (property.state) parts.push(property.state);
    return parts.join(", ") || "Ubicación no especificada";
  };

  return (
    <div
      onClick={() => navigate(`/property/${property.id}`)}
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="relative h-48">
        {property.images && property.images.length > 0 ? (
          <img
            src={property.images[0]}
            alt={
              property.address
                ? String(property.address)
                : "Imagen de la propiedad"
            }
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <Home className="w-12 h-12 text-gray-400" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-xl font-bold text-white">
            ${Number(property.price).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{formatLocation()}</span>
        </div>

        <div className="flex justify-between mt-3 text-sm">
          <div className="flex items-center text-gray-700">
            <BedDouble className="w-4 h-4 mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <SquareFeet className="w-4 h-4 mr-1" />
            <span>{property.square_meters} m²</span>
          </div>
        </div>

        <p className="text-gray-600 mt-2 text-sm line-clamp-2">
          {property.description}
        </p>
      </div>
    </div>
  );
}
