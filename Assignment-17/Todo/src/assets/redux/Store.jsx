import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({

     todo: reducer,
});

export default store;