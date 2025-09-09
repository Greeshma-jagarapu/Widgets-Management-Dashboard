import { configureStore } from "@reduxjs/toolkit";
import widgetsReducer from '../Slices/Widgets'

const store = configureStore({
    reducer: {
        widgets : widgetsReducer,
    }
})

export default store;