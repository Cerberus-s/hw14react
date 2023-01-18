import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodoActionCreator} from "../../redux/todo/actions";
import Button from "../../components/button";
import Input from "../../components/input";
import styles from './style.module.css'

const AddTodoContainer = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            dispatch(addTodoActionCreator(inputValue))
            setInputValue('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form 
            className={styles.input_parent}
            onSubmit={handleSubmit}
        >
            <Input
            value = {inputValue}
            onChange = {handleInputChange}
            />
            <Button onClick={handleAddTodo}>Add todo</Button>
        </form>
    );
};

export default AddTodoContainer;