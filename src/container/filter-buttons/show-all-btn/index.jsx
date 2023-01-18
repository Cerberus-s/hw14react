import React from 'react';
import {useDispatch} from "react-redux";
import {filterTodoActionCreator} from "../../../redux/filter/actions";
import {TYPE_OF_FILTER} from "../../../redux/filter/reducers";
import styles from './style.module.css'
const AllButton = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button className={styles.button_70} onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ALL))}>
                Show all
            </button>
        </div>
    );
};

export default AllButton;