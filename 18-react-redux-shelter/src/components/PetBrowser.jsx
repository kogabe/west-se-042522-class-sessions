import React from 'react'
import Pet from './Pet'
import { useSelector } from 'react-redux'

export default function PetBrowser() {

    const pets = useSelector(state => state.pets)

  const petCards = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} />
  ));

  return (
    <>
     
        <header as="h3">PetBrowser</header> 
        <div className="ui cards">{petCards}</div>
    </>
  )
}
