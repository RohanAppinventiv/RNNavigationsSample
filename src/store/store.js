import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./slices/contactSlice";

const store = configureStore({
    reducer: {
        contacts: ContactReducer
    }
})

export default store;