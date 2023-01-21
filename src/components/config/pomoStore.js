import { configureStore } from "@reduxjs/toolkit";
import pomoReducer from "./pomoReducer";

const store = configureStore({reducer:pomoReducer});

export default store;