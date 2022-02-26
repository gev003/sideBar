import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_MORE_DATA, REQUEST_IMAGES, REQUEST_IMAGES_SUCCESS } from "../actions/actions";
import { ImagesPayloadType } from "../types/categoriesTypes";


const initialValue: any = {};
export const loadImagesReducer = (state = initialValue, action: any) => {
    switch(action.type) {
        case REQUEST_IMAGES_SUCCESS: 
            return {
                ...state,
                data: action.payload
            }
        case ADD_MORE_DATA: 
            return {
                ...state,
                data: state.data ? [ ...state.data, ...action.payload] : [...action.payload]
            }
        default:
            return state
    }
}

export const loadImagesFromAPI = (id: string, addMoreItem?: boolean) => {
    return {
        type: REQUEST_IMAGES,
        id,
        addMoreItem
    }
}

export function* loadImagesSaga(payload: ImagesPayloadType) {
    try {        
        const APIUrl = `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${payload.id}`;
        const { data } = yield call(axios.get, APIUrl)

        if(payload.addMoreItem) yield put({type: ADD_MORE_DATA, payload: data})
        else yield put({type: REQUEST_IMAGES_SUCCESS, payload: data})
        
    } catch (error) {
        // console.log(error);
    }
}

export function* saga() {
    yield takeLatest(REQUEST_IMAGES, loadImagesSaga)
}