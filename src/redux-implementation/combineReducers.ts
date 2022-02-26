import { combineReducers } from "redux";
import { loadCategoriesReducer } from "../ducks/loadCategories";
import { loadImagesReducer } from "../ducks/loadImages";


export const rootReducer = combineReducers({
    images: loadImagesReducer,
    categories: loadCategoriesReducer
})

