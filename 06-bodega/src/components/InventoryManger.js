import React, { useState, useEffect } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([])
    const [reorders, setReorders] = useState([])

    const baseURL = "http://localhost:8001/inventory"

    useEffect(() => {
      fetch(baseURL)
        .then(res => res.json())
        .then(setInventory)
    }, [])
    
    const addToReorders = id => {
        console.log('id: ', id);
        const itemToAdd = inventory.find(item => item.id === id)
        if(!reorders.includes(itemToAdd)){
            setReorders([...reorders, itemToAdd])
        }
    }

    const removeFromReorders = id => {
        // const filteredReorders = reorders.filter(roi => roi.id !== id)
        // setReorders(filteredReorders)
        removeItemFromArray(reorders, id, setReorders)
    }

    const handleDelete = (e, id) => {
        e.stopPropagation()
        // the DELETE fetch could also happen on the component with the event, but you'd still
        // need to pass data up here to filter the arrays
       fetch(baseURL + `/${id}`, {method: 'DELETE'})
    //    const filteredReorders = reorders.filter(roi => roi.id !== id)
    //    setReorders(filteredReorders)
    //    const filteredInventory = inventory.filter(roi => roi.id !== id)
    //    setInventory(filteredInventory)
        removeItemFromArray(reorders, id, setReorders)
        removeItemFromArray(inventory, id, setInventory)
    }

    // make code more DRY by abstracting reusable logic into helper function
    function removeItemFromArray(array, id, setterFn){
        const filteredArr = array.filter(item => item.id !== id)
        setterFn(filteredArr)
    }


    return(
        <div className="container">
            <CurrentInventoryList 
              inventory={inventory} 
              onAddClick={addToReorders}
              onDelete={handleDelete}
              />
            <ReorderInventoryList 
              reorders={reorders} 
              onRemoveClick={removeFromReorders}
              onDelete={handleDelete}
            />
        </div>
    );
}

export default InventoryManager;