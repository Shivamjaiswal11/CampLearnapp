import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState= {
    todolist:[]
}

 const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        addTodo(state,action){
            state.todolist.push({
                id:nanoid(),
                title:action.payload
            })
        },
        deleteTodo(state,action){
            
            state.todolist = state.todolist.filter(todo => todo.id !== action.payload)
            return state;
        },
        editTodo(state,action){
            console.log(action.payload)
            let gettodos = state.todolist;
            const newtodlistindex= state.todolist.findIndex(todo => todo.id === action.payload.id)
          
              gettodos[newtodlistindex] = {
                ...gettodos[newtodlistindex],
                  title:action.payload.title
              }
        
            state.todolist = gettodos
        },
    }


 })

 export const {addTodo,deleteTodo,editTodo}   = todoSlice.actions
 export const todoReducer  = todoSlice.reducer