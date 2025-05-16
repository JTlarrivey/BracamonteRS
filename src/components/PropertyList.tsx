import { useEffect, useState } from "react";
import { PropertyCard } from "./PropertyCard";
import { supabase } from "../lib/supabase";
import type { Database } from "../../src/types/supabase";

type Property = Database["public"]["Tables"]["properties"]["Row"];

interface PropertyListProps {
  location?: string;
  propertyType?: string;
}

export function PropertyList({ location, propertyType }: PropertyListProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);

      const hasLocation = location?.trim();
      const hasType = propertyType?.trim();

      console.log("Filtros activos:", {
        location,
        propertyType,
      });

      try {
        let query = supabase
          .from("properties")
          .select("*")
          .order("created_at", { ascending: false });

        if (hasLocation) {
          query = query.ilike("city", `%${hasLocation}%`);
        }

        if (hasType) {
          query = query.eq("property_type", propertyType);
        }

        const { data, error } = await query;

        if (error) {
          console.error("Supabase error:", error);
          setError(error.message);
          return;
        }

        console.log("Propiedades filtradas:", data);
        setProperties(data || []);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [location, propertyType]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white text-center">Error: {error}</div>;
  }

  if (properties.length === 0) {
    return (
      <div className="text-white text-center">
        No se encontraron propiedades
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
