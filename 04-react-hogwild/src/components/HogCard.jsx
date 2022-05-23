import React, { useState } from 'react'
import HogDetail from './HogDetail'

export default function HogCard({hog}) {

    const [showDetails, setShowDetails] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

    const {name, image} = hog

  if (isHidden) return null; 
  
  return (
    <div className="ui card wide column pigTile">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <h3 className="header">{name}</h3>
      </div>
      {showDetails && <HogDetail hog={hog} />}
      <button
        className="ui button"
        onClick={() => setShowDetails(showDetails => !showDetails)}
      >
        {showDetails ? "Less Info" : "More Info"}
      </button>
      <button className="ui button" onClick={() => setIsHidden(true)}>
        Hide Me{" "}
        <span role="img" aria-label="snout">
          🐽
        </span>
      </button>
    </div>
    )
}
