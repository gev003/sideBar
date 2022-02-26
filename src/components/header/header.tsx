import { useCallback, useState } from 'react';
import styles from './index.module.scss';

type Props = {
    setToggleBar: () => void
}

const Header = ({setToggleBar}: Props) => {

    return (
        <>
            <div className={styles.header}></div>
            <button type="button" onClick={() => setToggleBar()} className={styles.toggleBtn}>Toggle</button>
        </>
        
    )
}

export default Header;