import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {

  const initialPlantFormData = {
    name: '',
    image: '',
    price: ''
  }

  const [plantFormData, setPlantFormData] = useState(initialPlantFormData)

  function handleChange(e){
    // console.dir(e.target)
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
        price: parseFloat(plantFormData.price)
      })
    }
    fetch("http://localhost:6001/plants", config)
      .then(res => res.json())
      .then(newPlant => {
        onAddPlant(newPlant)
        setPlantFormData(initialPlantFormData)
      })

    // onAddPlant(plantFormData)
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
