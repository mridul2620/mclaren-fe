// src/components/homepage/homepageContent.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; 
import { useRouter } from 'next/navigation';

// Add proper type for the vehicle data
interface VehicleData {
  _id: string;
  brand: string;
  model: {
    name: string;
    year: number;
    engine: string;
    bodyStyle: string;
    drive: string;
    transmission: string;
  };
}

const HomepageContent: React.FC = () => {
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [availableEngines, setAvailableEngines] = useState<string[]>([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  // Fetch vehicles data
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("https://publication-portal-be.onrender.com/api/vehicles/getVehicles");
        setVehicles(response.data.data);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };
    fetchVehicles();
  }, []);

  // Update available models when brand changes
  useEffect(() => {
    const models = vehicles
      .filter(vehicle => vehicle.brand === selectedBrand)
      .map(vehicle => vehicle.model.name);
    setAvailableModels([...new Set(models)]);
    setSelectedModel("");
  }, [selectedBrand, vehicles]);

  // Update available years when model changes
  useEffect(() => {
    const years = vehicles
      .filter(vehicle => vehicle.brand === selectedBrand && vehicle.model.name === selectedModel)
      .map(vehicle => vehicle.model.year);
    setAvailableYears([...new Set(years)]);
    setSelectedYear(null);
  }, [selectedModel, selectedBrand, vehicles]);

  // Update available engines when year changes
  useEffect(() => {
    const engines = vehicles
      .filter(vehicle =>
        vehicle.brand === selectedBrand &&
        vehicle.model.name === selectedModel &&
        vehicle.model.year === selectedYear
      )
      .map(vehicle => vehicle.model.engine);
    setAvailableEngines([...new Set(engines)]);
  }, [selectedYear, selectedModel, selectedBrand, vehicles]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedBrand || !selectedModel || !selectedYear) {
      alert("Please select a brand, model, and year.");
      return;
    }
    
    // Set navigating state to true
    setIsNavigating(true);
    
    // Create a prefetch link to ensure CSS loads properly
    const prefetchLink = document.createElement('link');
    prefetchLink.rel = 'prefetch';
    prefetchLink.href = '/circuit-page.css';
    document.head.appendChild(prefetchLink);
    
    // Use a small timeout to ensure CSS prefetch has time to initiate
    setTimeout(() => {
      router.push(`/circuit-page?brand=${selectedBrand}&model=${selectedModel}&year=${selectedYear}`);
    }, 100);
  };

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="container">
      <nav>
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h1>Chartsign</h1>
        </div>
        <div className="logout-icon" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
      </nav>
      <div className="content-wrapper">
        <div className="model-selection-box">
          <h2>Model Selection</h2>
          <form onSubmit={handleSubmit}>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              disabled={isNavigating}
            >
              <option value="">- Select brand -</option>
              {[...new Set(vehicles.map(vehicle => vehicle.brand))].map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={!selectedBrand || isNavigating}
            >
              <option value="">- Select model -</option>
              {availableModels.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
            <select
              value={selectedYear?.toString() || ""}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              disabled={!selectedModel || isNavigating}
            >
              <option value="">- Select year -</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select disabled={!selectedYear || isNavigating}>
              <option value="">- Select engine -</option>
              {availableEngines.map(engine => (
                <option key={engine} value={engine}>{engine}</option>
              ))}
            </select>
            <button type="submit" disabled={isNavigating}>
              {isNavigating ? 'Loading...' : 'Find'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomepageContent;