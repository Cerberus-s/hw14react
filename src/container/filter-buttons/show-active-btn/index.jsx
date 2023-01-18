import React from 'react';
import {filterTodoActionCreator} from "../../../redux/filter/actions";
import {TYPE_OF_FILTER} from "../../../redux/filter/reducers";
import {useDispatch} from "react-redux";
import styles from './style.module.css'

const ActiveButton = () => {
    const dispatch = useDispatch()
    
    return (
        <div>
            <button className={styles.button_active} onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ACTIVE))}>
                Show active
            </button>
        </div>
    );
};

export default ActiveButton;