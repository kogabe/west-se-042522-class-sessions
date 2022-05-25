import React, { useState } from "react";

function PlantCard({plant, onUpdatePlant}) {

  const {id, name, image, price} = plant

  const [inStock, setInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState(price)


  function handlePriceFormSubmit(e){
    e.preventDefault()
    const config = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({price: updatedPrice})
    }
    fetch(`http://localhost:6001/plants/${id}`, config)
     .then(response => response.json())
     .then(onUpdatePlant)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)} >Out of Stock</button>
      )}
      <form onSubmit={handlePriceFormSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
