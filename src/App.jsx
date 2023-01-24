import React, {useEffect} from 'react'
import './App.css';
import AddTodoContainer from "./container/add-todo";
import TodoListContainer from "./container/todo-list";
import FilterButton from "./container/filter-buttons";
import {useDispatch, useSelector} from "react-redux";
import postOperations from './redux/post/thunk'
import FormLS from './components/form';

function App() {
    const posts = useSelector(state=> state.posts.list)
    const post = useSelector(state => state.posts.data)
    const createdPost = useSelector(state => state.posts.data)
    const updateStatus = useSelector(state => state.posts)
    const deleteStatus = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const {fetchPosts, fetchPostById, updatePostById, createPost, deletePostById} = postOperations
    
    useEffect(() => {
        dispatch(postOperations.fetchPosts())
    }, [])
    
    // console.log(posts)

    return (
        <div className="main_block">
            <AddTodoContainer/>
            <FilterButton/>
            <TodoListContainer/>
            <div>
                <FormLS/>
            </div>
        </div>
        
    );
}

export default App;