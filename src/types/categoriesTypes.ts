import { REQUEST_IMAGES } from "../actions/actions";


export interface CategoriesItemType {
    id: number,
    name: string
}

export interface ImagesPayloadType {
    id: string,
    type: typeof REQUEST_IMAGES
    addMoreItem?: boolean
}