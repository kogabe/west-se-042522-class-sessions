import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const baseURL = "http://localhost:6001"

  useEffect(() => {
    fetch(baseURL + "/plants")
      .then(res => res.json())
      .then(setPlants)
  

  }, [])

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  const displayedPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
