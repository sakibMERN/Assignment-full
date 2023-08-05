import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../state/todo/TodoSlice"


export default configureStore({
     reducer:{

          todo: todoReducer,
     }
});