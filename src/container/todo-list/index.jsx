import React from 'react';
import TodoItem from "../../components/todo-item";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../../redux/todo/selectors";
import {deleteTodoActionCreator, toggleTodoActionCreator} from "../../redux/todo/actions";
import {TYPE_OF_FILTER} from "../../redux/filter/reducers";
import {getActiveFilter} from "../../redux/filter/selectors";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './style.module.css'

const TodoListContainer = () => {
    const todos = useSelector(getTodos)
    const activeFilter = useSelector(getActiveFilter)
    const dispatch = useDispatch()

    if (!todos.length) {
        return (
            <p>No todos. Please add new todo</p>
        )
    }

    const handleToggleTodo = (id) => {
        dispatch(toggleTodoActionCreator(id))
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodoActionCreator(id))
    }

    const filterTodos = (todos, filter) => {
        switch (filter) {
            case TYPE_OF_FILTER.SHOW_ALL:
                return todos
            case TYPE_OF_FILTER.SHOW_ACTIVE:
                return todos.filter(todo => todo.isComplete === false)
            case TYPE_OF_FILTER.SHOW_COMPLETE:
                return todos.filter(todo => todo.isComplete === true)
            default:
                return todos
        }
    }
    
    return (
        <div className={styles['parent_list']}>
            <List
                className={styles['added_list']}
                sx={{width: '100%', maxWidth: 360,}}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <ul className={styles['list_items']}>
                                {filterTodos(todos, activeFilter).map((todo, idx) => (
                                    <TodoItem
                                        key={idx}
                                        text={todo.text}
                                        isComplete={todo.isComplete}
                                        onClick={() => handleToggleTodo(todo.id)}
                                        onDelete={() => handleDeleteTodo(todo.id)}
                                    />
                                ))}
                            </ul>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
};

export default TodoListContainer;