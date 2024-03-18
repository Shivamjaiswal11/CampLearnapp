const { createSlice, nanoid } = require("@reduxjs/toolkit");


const initialState=[
{id:1,name:'Milk'},
{id:2,name:'Soda'}

]
const grocerySlice= createSlice({
name:'grocery',
initialState:initialState,
reducers:{
    addGrocery(state,action){
        state.push({
            id:nanoid(),
            name:action.payload
        })
    }
}

})

export const {addGrocery}   = grocerySlice.actions
export const groceryReducer = grocerySlice.reducer
