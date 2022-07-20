import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 100
}

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addTen(state) {
            state.value += 10
        },
        // immer lib takes a state mutation and does state cloning instead
        // toolkit creates an actionCreate fn to match the reducer fn
        subtractAmount(state, action) {
            state.value -= action.payload
        }
    }
})

export const { addTen, subtractAmount } = budgetSlice.actions
export default budgetSlice.reducer