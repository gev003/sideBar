import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_CATEGORIES, REQUEST_CATEGORIES_SUCCESS, REQUEST_IMAGES, REQUEST_IMAGES_SUCCESS } from "../actions/actions";


const initialValue = {};
export const loadCategoriesReducer = (state = initialValue, action: any) => {
    switch(action.type) {
        case REQUEST_CATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export const loadCategoriesFromAPI = () => {
    return {
        type: REQUEST_CATEGORIES
    }
}

export function* loadCategoriesSaga() {
    try {

        const APIUrl = 'https://api.thecatapi.com/v1/categories';
        const { data } = yield call(axios.get, APIUrl)

        yield put({type:  REQUEST_CATEGORIES_SUCCESS, payload: data})
        
    } catch (error) {
        
    }
}

export function* saga() {
    yield takeLatest(REQUEST_CATEGORIES, loadCategoriesSaga)
}