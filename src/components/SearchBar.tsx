import React from "react";
import { Location, PropertyType } from "../types";
import { Search } from "lucide-react";

interface SearchBarProps {
  onLocationChange: (location: Location | "") => void;
  onTypeChange: (type: PropertyType | "") => void;
  onPriceRangeChange: (range: { min: number; max: number }) => void;
}

export function SearchBar({
  onLocationChange,
  onTypeChange,
  onPriceRangeChange,
}: SearchBarProps) {
  const locations: Location[] = [
    "City Bell",
    "La Plata",
    "Gonnet",
    "Ringuelet",
    "Villa Elisa",
    "El Rincón",
  ];
  const propertyTypes: PropertyType[] = [
    "departamento",
    "monoambiente",
    "duplex",
    "PH",
    "Casa",
    "Propiedad Rural",
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Ubicación
          </label>
          <select
            onChange={(e) => onLocationChange(e.target.value as Location | "")}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
          >
            <option value="">Todas las ubicaciones</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Tipo de Propiedad
          </label>
          <select
            onChange={(e) => onTypeChange(e.target.value as PropertyType | "")}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
          >
            <option value="">Todos los tipos</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Rango de Precio
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              onChange={(e) =>
                onPriceRangeChange({
                  min: Number(e.target.value),
                  max: 1000000,
                })
              }
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
            />
            <input
              type="number"
              placeholder="Max"
              onChange={(e) =>
                onPriceRangeChange({ min: 0, max: Number(e.target.value) })
              }
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
