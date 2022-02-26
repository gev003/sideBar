import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { loadImagesFromAPI } from "../../ducks/loadImages";
import styles from './index.module.scss'; 



type Props = {
    toggleSideBar: boolean,
    activeCategoryId: string
}

const DrawImages = ({toggleSideBar, activeCategoryId}: Props) => {

    const { data } = useSelector((state: any) => state.images);

    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.mainImagesWrapper, !toggleSideBar && styles.dynamicView)}>
                {data && data.map((item: any) => (
                    // key is like that because it iterates one more item , solve is that I should have count and give it to link, but I have nor time .
                    <div key={item.id + item.height + Math.random()} className={styles.imageWrapper}>
                        <img src={item.url} />
                    </div>
                ))}
            </div>
            {data && <button className={styles.btn} onClick={() => dispatch(loadImagesFromAPI(activeCategoryId, true))}>Load More</button>}
        </div>
    )
}
export default DrawImages