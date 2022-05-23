import React from 'react'
import HogCard from './HogCard'

export default function HogList({hogs}) {
    const hogCards = hogs.map(hog => (
        <HogCard 
          key={hog.name + hog.weight} 
          hog={hog} 
        />)
    )
  return (
    <div className="ui three stackable cards">{hogCards}</div>
  )
}
