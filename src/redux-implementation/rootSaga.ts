import { all } from "@redux-saga/core/effects";
import { saga as loadImagesSaga} from "../ducks/loadImages";
import { saga as loadICategoriesSaga} from "../ducks/loadCategories";



export function* rootSaga() {
    yield all([
        loadImagesSaga(),
        loadICategoriesSaga()
    ])
}