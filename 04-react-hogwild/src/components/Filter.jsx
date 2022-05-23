import React from 'react'

export default function Filter({showGreased, onCheckGreased, sortBy, onChangeSortBy}) {
  return (
    <div className="ui menu">
        <div className="ui item">
            <label>Sort by</label>
        </div>
        <div className="ui item">
            <select 
                className="ui selection dropdown"
                value={sortBy}
                onChange={(e) => onChangeSortBy(e.target.value)}
            >
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
        
        <div className="ui item">
            <label>Greased pigs only?</label>
        </div>
        <input
          className="ui toggle checkbox"
          type="checkbox"
          checked={showGreased}
          onChange={(e) => onCheckGreased(e.target.checked)}
         />
    </div>
  )
}
