import React from 'react';
import AllButton from "./show-all-btn";
import ActiveButton from "./show-active-btn";
import CompleteButton from "./show-complete-btn";
import styles from './style.module.css'
const FilterButton = () => {
    return (
        <div className={styles['buttons_parent']}>
            <AllButton/>
            <ActiveButton/>
            <CompleteButton/>
        </div>
    );
};

export default FilterButton;