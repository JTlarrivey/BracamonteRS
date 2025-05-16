import { PropertyType } from "../types";

interface SearchBarProps {
  onLocationChange: (city: string) => void;
  onTypeChange: (type: PropertyType | "") => void;
}

export function SearchBar({ onLocationChange, onTypeChange }: SearchBarProps) {
  const cities = [
    "La Plata",
    "City Bell",
    "Gonnet",
    "Villa Elisa",
    "Ringuelet",
    "Los Hornos",
    "Tolosa",
    "Berisso",
    "Ensenada",
  ];
  const propertyTypes: PropertyType[] = [
    "Departamento",
    "Monoambiente",
    "Duplex",
    "PH",
    "Casa",
    "Local",
    "Rural",
    "Terreno",
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Ubicación
          </label>
          <select
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
          >
            <option value="">Todas las ubicaciones</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
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
      </div>
    </div>
  );
}
