import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const addTodoReducer = createSlice({

     name: "todos",
     initialState,
     reducers:{

          addTodos :(state, action)=>{

               state.push(action.payload);
          }
     }
})

export const {addTodos} = addTodoReducer.actions;
export default addTodoReducer.reducer;