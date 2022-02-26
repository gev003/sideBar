import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { loadCategoriesFromAPI } from "../../ducks/loadCategories";
import { loadImagesFromAPI } from "../../ducks/loadImages";
import firstLetterUppercase from "../../helpers/firstLetterUppercase";
import { CategoriesItemType } from "../../types/categoriesTypes";
import styles from './index.module.scss';

type Props = {
    toggleSideBar: boolean;
    setCategoryId: (id: string) => void
}

const DrawListOfCategories = ({toggleSideBar, setCategoryId}: Props) => {

    const dispatch = useDispatch();

    const categoryItemClicked = (id: string) => {
        dispatch(loadImagesFromAPI(id))
        setCategoryId(id)
    }

    const {data: listOfCategories} = useSelector((state: any) => state.categories, shallowEqual);
    
    return (
        <div className={classNames(toggleSideBar && styles.openSideBar , styles.sideBarWrapper)}>
            <div className={styles.sideBarList}>
                <ul>
                    {listOfCategories && listOfCategories.map((item: CategoriesItemType) => (
                        <li onClick={() => categoryItemClicked(item.id.toString())} key={item.id}>
                            {firstLetterUppercase(item.name)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DrawListOfCategories;