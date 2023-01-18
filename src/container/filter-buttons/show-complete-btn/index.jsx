import React from 'react';
import {filterTodoActionCreator} from "../../../redux/filter/actions";
import {TYPE_OF_FILTER} from "../../../redux/filter/reducers";
import {useDispatch} from "react-redux";
import styles from './style.module.css'

const CompleteButton = () => {
    const dispatch = useDispatch()
   
    return (
        <div>
            <button className={styles.button_18} onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_COMPLETE))}>
                Show completed
            </button>
        </div>
    );
};

export default CompleteButton;