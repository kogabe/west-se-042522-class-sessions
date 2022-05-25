import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({ inventory, onAddClick }) {

    const inventoryCards = inventory.map(invObj => (
      <InventoryItemCard 
        key={invObj.id} 
        {...invObj} 
        handleClick={onAddClick}
      />
      )
    )

    return( 
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryCards}
            </div>
        </div>
    );
}

export default CurrentInventoryList;