import React from 'react';
import styles from './style.module.css'

const TodoItem = (props) => {
    const {
        text,
        onClick,
        onDelete,
        isComplete
    } = props
    return (
        <li
            className={styles.item_block}
            onClick={onClick}
            style = {{
                textDecoration: isComplete ? 'line-through' : 'none'
            }}
        >
            {text}
            <button className={styles.delete_button} onClick={onDelete}>
                delete
            </button>
        </li>
    );
};

export default TodoItem;