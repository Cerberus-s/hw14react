import React, {useEffect} from 'react'
import './App.css';
import AddTodoContainer from "./container/add-todo";
import TodoListContainer from "./container/todo-list";
import FilterButton from "./container/filter-buttons";
import {useDispatch, useSelector} from "react-redux";
import postOperations from './redux/post/thunk'

function App() {
    const posts = useSelector(state => state.posts.list)
    const dispatch = useDispatch()
    const {fetchPosts} = postOperations
    
    useEffect(() => {
        dispatch(postOperations.fetchPosts())
    }, [])
    
    console.log(posts)

    return (
        <div className='main_block'>
            <div>
                <AddTodoContainer/>
            </div>
            <>
                <FilterButton/>
            </>
            <div>
                <TodoListContainer/>
            </div>
        </div>
    );
}

export default App;