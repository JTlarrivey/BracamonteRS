import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PropertyList } from "./components/PropertyList";
import { PropertyDetails } from "./components/PropertyDetails";
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer";
import { AboutPage } from "./components/AboutPage";
import { Property, Location, PropertyType } from "./types";
import logo from "./assets/logo.png";

// Sample data remains the same
export const sampleProperties: Property[] = [
  {
    id: "1",
    type: "Casa",
    location: "City Bell",
    address: "Calle 473 1234",
    price: 250000,
    description:
      "Hermosa casa con jardín amplio y piscina. 3 dormitorios, 2 baños, garage para 2 autos. Ubicada en una de las zonas más tranquilas y arboladas de City Bell, esta propiedad ofrece el equilibrio perfecto entre confort y naturaleza.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1000",
    ],
    services: ["Agua", "Luz", "Gas", "Internet"],
    taxes: {
      municipal: 150,
      provincial: 200,
    },
    hasDebts: false,
    features: ["Piscina", "Jardín", "Garage", "Parrilla"],
    squareMeters: 280,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: "2",
    type: "departamento",
    location: "La Plata",
    address: "Calle 7 entre 45 y 46",
    price: 120000,
    description:
      "Moderno departamento en el centro. 2 dormitorios, balcón con vista a la ciudad. Totalmente renovado con acabados de primera calidad.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000",
    ],
    services: ["Agua", "Luz", "Gas", "Internet", "Seguridad 24hs"],
    taxes: {
      municipal: 80,
      provincial: 100,
    },
    hasDebts: false,
    features: ["Balcón", "Cocina integrada", "Lavadero"],
    squareMeters: 85,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: "3",
    type: "Casa",
    location: "Gonnet",
    address: "Calle 485 2567",
    price: 280000,
    description:
      "Espectacular casa estilo moderno con amplios espacios verdes y diseño contemporáneo.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f1?auto=format&fit=crop&q=80&w=1000",
    ],
    services: ["Agua", "Luz", "Gas", "Internet"],
    taxes: {
      municipal: 180,
      provincial: 220,
    },
    hasDebts: false,
    features: ["Jardín", "Garage", "Quincho"],
    squareMeters: 320,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: "4",
    type: "PH",
    location: "Villa Elisa",
    address: "Calle 412 789",
    price: 95000,
    description:
      "PH reciclado a nuevo con excelente ubicación y patio privado.",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1000",
    ],
    services: ["Agua", "Luz", "Gas"],
    taxes: {
      municipal: 70,
      provincial: 90,
    },
    hasDebts: true,
    debtAmount: 1200,
    features: ["Patio", "Terraza"],
    squareMeters: 120,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: "5",
    type: "monoambiente",
    location: "La Plata",
    address: "Calle 54 890",
    price: 75000,
    description: "Moderno monoambiente ideal para estudiantes o inversión.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
    ],
    services: ["Agua", "Luz", "Internet"],
    taxes: {
      municipal: 50,
      provincial: 60,
    },
    hasDebts: false,
    features: ["Cocina integrada", "Balcón francés"],
    squareMeters: 35,
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: "6",
    type: "Propiedad Rural",
    location: "El Rincón",
    address: "Ruta 2 Km 45",
    price: 450000,
    description: "Campo con casa principal, galpones y excelente acceso.",
    images: [
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1572455834592-8891f627e189?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595878715977-2e8f8df78045?auto=format&fit=crop&q=80&w=1000",
    ],
    services: ["Luz", "Agua de pozo"],
    taxes: {
      municipal: 300,
      provincial: 400,
    },
    hasDebts: false,
    features: ["Casa principal", "Galpones", "Molino"],
    squareMeters: 50000,
    bedrooms: 4,
    bathrooms: 2,
  },
];

function App() {
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(sampleProperties);
  const [selectedLocation, setSelectedLocation] = useState<Location | "">("");
  const [selectedType, setSelectedType] = useState<PropertyType | "">("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });

  const filterProperties = () => {
    return sampleProperties.filter((property) => {
      const locationMatch =
        !selectedLocation || property.location === selectedLocation;
      const typeMatch = !selectedType || property.type === selectedType;
      const priceMatch =
        property.price >= priceRange.min && property.price <= priceRange.max;
      return locationMatch && typeMatch && priceMatch;
    });
  };

  const handleLocationChange = (location: Location | "") => {
    setSelectedLocation(location);
    setFilteredProperties(filterProperties());
  };

  const handleTypeChange = (type: PropertyType | "") => {
    setSelectedType(type);
    setFilteredProperties(filterProperties());
  };

  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    setPriceRange(range);
    setFilteredProperties(filterProperties());
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#1E2841] flex flex-col">
        <header className="bg-[#1E2841] shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-center gap-2">
              <img
                src={logo}
                alt="Bracamonte Propiedades"
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-white">
                Bracamonte Propiedades
              </h1>
            </div>
          </div>
        </header>

        <div className="flex-grow animate-fade-in">
          <Routes>
            <Route
              path="/"
              element={
                <main className="container mx-auto px-4 py-8">
                  <div className="mb-8">
                    <SearchBar
                      onLocationChange={handleLocationChange}
                      onTypeChange={handleTypeChange}
                      onPriceRangeChange={handlePriceRangeChange}
                    />
                  </div>
                  <PropertyList properties={filteredProperties} />
                </main>
              }
            />
            <Route
              path="/property/:id"
              element={<PropertyDetails properties={sampleProperties} />}
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
