import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  
  // this obj can be used both to set the initial value in state but also to reset the form
  // after submission
  const initialPlantFormData = {
    name: '',
    image: '',
    price: ''
  }

  const [plantFormData, setPlantFormData] = useState(initialPlantFormData)

  function handleChange(e){
    const {name, value} = e.target
    setPlantFormData({
      ...plantFormData,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    // const newPlant = {
    //   name: plantFormData.name,
    //   image: plantFormData.image,
    //   price: parseFloat(plantFormData.price)
    // }
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...plantFormData,
        // HTML inputs alway return their values as strings, so if we want to keep price a number
        // we need to convert (coerce) it into a float (number with decimal places)
        price: parseFloat(plantFormData.price)
      })
    }
    fetch("http://localhost:6001/plants", config)
      .then(res => res.json())
      .then(newPlant => {
        // call the callback function, sending the newPlant object up to PlantPage
        // pessimitic rendering
        onAddPlant(newPlant)
        // reset the form
        setPlantFormData(initialPlantFormData)
      })

    // onAddPlant(plantFormData) // this would be optimistic rendering, not a great idea here
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input value={plantFormData.name} type="text" name="name" placeholder="Plant name" />
        <input value={plantFormData.image} type="text" name="image" placeholder="Image URL" />
        <input value={plantFormData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
