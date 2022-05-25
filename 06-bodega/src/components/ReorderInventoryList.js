import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({reorders, onRemoveClick, onDelete}) {

    const inventoryCards = reorders.map(invObj => (
        <InventoryItemCard 
          key={invObj.id} 
          {...invObj} 
          handleClick={onRemoveClick}
          onDelete={onDelete}
        />
        )
      )

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {inventoryCards}
            </div>
        </div>
    );
}

export default ReorderInventoryList;