import './style.css'
import { createStore } from 'redux'


const initialState = {
  budget: 500,
  volunteers: [
    {id: 1, name: "Josh"},
    {id: 2, name: "Wendy"}
  ],
  pets: [
    {id: 1, name: "Daisy", species: "dog"},
    {id: 2, name: "Felix", species: "cat"}
  ]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "addTenDollars":
      // state.budget += 10 // antipattern! Don't mutate state directly
      return {
        ...state,
        budget: state.budget += 10
      }
  }

  return state
}

// const nextState = reducer(initialState, {type: "addTenDollars"})
// console.log('nextState: ', nextState);

const store = createStore(reducer)
console.log('store: ', store);

// respond to store change
store.subscribe(() => {
  const state = store.getState()
  const budgetH3 = document.querySelector("#budget")
  budgetH3.textContent = `Budget: ${state.budget}`
})
// dispatch(action) -> reducer(currState, action) -> newState
// store.dispatch({type: "addTenDollars"})
const nextState = store.getState()
console.log('nextState: ', nextState);
const petsUl = document.querySelector('#pets')
nextState.pets.forEach((p) => {
  const li = document.createElement('li')
  li.textContent = `Name: ${p.name} | Species: ${p.species}`
  petsUl.appendChild(li)
})

const plus10 = document.querySelector('#add10')
plus10.addEventListener('click', () => store.dispatch({type: 'addTenDollars'}))