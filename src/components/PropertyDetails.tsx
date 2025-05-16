import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Bed, Bath, Square, Check } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import { supabase } from "../lib/supabase";
import type { Database } from "../../src/types/supabase";

type Property = Database["public"]["Tables"]["properties"]["Row"];

export function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperty() {
      if (!id) return;

      try {
        const { data: propertyData, error } = await supabase
          .from("properties")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setProperty(propertyData);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-white">Property not found</div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(Number(property.price));

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
          <ImageCarousel images={property.images || []} />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Home className="w-5 h-5" />
                <span>{property.location}</span>
                <span className="px-2 py-1 bg-gray-100 rounded-md text-sm font-semibold">
                  {property.property_type}
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
              <span>{property.square_meters}m²</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Descripción</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>

          {property.amenities && property.amenities.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Comodidades</h2>
              <ul className="grid grid-cols-2 gap-2">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
