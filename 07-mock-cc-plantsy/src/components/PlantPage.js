import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // if you're doing multiple fetches in the same file, it's a good practice to use a baseURL variable
  // although I don't end up reusing it here...
  const baseURL = "http://localhost:6001"

  useEffect(() => {
    fetch(baseURL + "/plants")
      .then(res => res.json())
      .then(setPlants)
  }, [])

  function handleAddPlant(newPlant){
    // use the spread operator whenever you want to add a new object to an existing array in state
    setPlants([...plants, newPlant])
  }

  function handleUpdatePlant(newPlant){
    // I'll often console log the parameter of a callback function to make sure it gets passed down all the way to
    // the component with the triggering event, and that the caller is sending right data as an argument
    // console.log('newPlant: ', newPlant);

    // .map is the way to update one object in an array in state -> to render a change to component out of a list
    const updatedPlants = plants.map(plant => plant.id === newPlant.id ? newPlant : plant)
    setPlants(updatedPlants)
  }

  function handleDeletePlant(id){
    // .filter is the way to delete an object from a state array -> to remove a component in a list from the DOM
    const filteredPlants = plants.filter(plant => plant.id !== id)
    setPlants(filteredPlants)
  }

  // .filter is also often used in search functionality together with .includes
  const displayedPlants = plants.filter(plant => {
    // calling .toLowerCase() on both each plant in the array and the searchTerm ensures that your comparison is case insensitive
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList 
        plants={displayedPlants} 
        onUpdatePlant={handleUpdatePlant}
        onDeletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
