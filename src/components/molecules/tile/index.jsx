import React from 'react';
import styles from './index.module.scss';

function Tile({id, children, mark, isSet}) {
    const myStyles = isSet ? styles.tileset : styles.tile;
    

    return (
        <div onClick={() => mark(id)} className={myStyles} id={id}>
            {children}
        </div>
    );
}

export default Tile;