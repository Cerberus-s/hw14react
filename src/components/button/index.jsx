import * as React from 'react';
import styles from './style.module.css'

const Buttons = (props) => {
    const {
        onClick,
        children
    } = props
    return (
        <div>
            <button className={styles.button_active} onClick={onClick}>{children}</button>
        </div>
    );
};

export default Buttons;