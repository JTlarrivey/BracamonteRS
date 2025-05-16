import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PropertyList } from "./components/PropertyList";
import { PropertyDetails } from "./components/PropertyDetails";
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer";
import { AboutPage } from "./components/AboutPage";
import logo from "./assets/logo.png";

function App() {
  const [location, setLocation] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");

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
                      onLocationChange={setLocation}
                      onTypeChange={setPropertyType}
                    />
                  </div>
                  <PropertyList
                    {...(location.trim() !== "" && { location })}
                    {...(propertyType.trim() !== "" && { propertyType })}
                  />
                </main>
              }
            />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
