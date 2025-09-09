import { createSlice } from "@reduxjs/toolkit";
import { categories } from '../db/data.json'
import { v4 as uuid } from "uuid";

console.log(categories)
const initialState = {
    categories : JSON.parse(JSON.stringify(categories)),
    categoryAddWidgetClick: false,
    category : categories[0].name,
    searchText: '',
    isSelectionWindowOpen: false
}

const Widgets = createSlice({
    name: 'widgets',
    initialState,
    reducers : {
        setCategoryAddWidgetClick: (state,action) => {
        state.categoryAddWidgetClick = action.payload;
       },
       setCategory : (state,action) => {
         state.category = action.payload
       },
       addWidget : (state,action) => {
         const selectedCategory = state.categories.find((category) => category.name == state.category);
         selectedCategory.widgets.push({id: uuid(), title: action.payload.name, text: action.payload.text, isChecked: true})
         state.category = categories[0].name;
       },
       deleteWidget : (state, action) => {
         const selectedCategory = state.categories.find(category => category.name === action.payload.catName);
         selectedCategory.widgets = selectedCategory.widgets.filter(widget => widget.id !== action.payload.widgetId);
       },
      setWidgetCheckedUnchecked: (state,action) => {
         state.categories = action.payload;
     },
       setSearchText: (state,action) => {
          state.searchText = action.payload.searchValue
       },
       setSelectionWindowState: (state, action) => {
        state.isSelectionWindowOpen = action.payload;
       }
    }

})


export const {setCategoryAddWidgetClick, setCategory, addWidget, deleteWidget, setWidgetCheckedUnchecked, setSearchText, setSelectionWindowState} = Widgets.actions;

export default Widgets.reducer;