import React from 'react'
import Pet from './Pet'
// import { useSelector } from 'react-redux'
import { useFetchPetsQuery } from '../app/services/petsApi'

export default function PetBrowser() {

    // const pets = useSelector(state => state.pets)
    const { data=[], isFetching } = useFetchPetsQuery()

  const petCards = data.map((pet) => (
    <Pet key={pet.id} pet={pet} />
  ));

  if (isFetching) {
      return <h1>Loading ...</h1>
  }

  return (
    <>
     
        <header as="h3">PetBrowser</header> 
        <div className="ui cards">{petCards}</div>
    </>
  )
}
