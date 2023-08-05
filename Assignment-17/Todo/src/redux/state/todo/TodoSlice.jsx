import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({

     name:"todo",
     initialState:{
          value:[]
     },
     reducers:{

          AddTodo:(state,action)=>{
               state.value.push(action.payload)
          },

          RemoveTodo:(state,action)=>{
               state.value.splice(action.payload,1)
          },

     }

});

export const {AddTodo, RemoveTodo} = TodoSlice.actions;
export default TodoSlice.reducer;