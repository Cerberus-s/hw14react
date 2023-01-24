import {
    createPostFailureActionCreator,
    createPostReceiveActionCreator,
    createPostRequestActionCreator,
    deletePostFailureActionCreator,
    deletePostReceiveActionCreator,
    deletePostRequestActionCreator,

    getPostFailureActionCreator,
    getPostReceiveActionCreator,
    getPostRequestActionCreator,

    getPostsFailureActionCreator,
    getPostsReceiveActionCreator,
    getPostsRequestActionCreator,

    updatePostFailureActionCreator,
    updatePostReceiveActionCreator,
    updatePostRequestActionCreator
} from "./actions";

const fetchPosts = () => async (dispatch) => {
    dispatch(getPostsRequestActionCreator())
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts')
        const parsedData = await req.json()
        setTimeout(() => {
            dispatch(getPostsReceiveActionCreator(parsedData))
        }, 2000)
    } catch (e) {
        dispatch(getPostsFailureActionCreator(e))
    }
}

const fetchPostById = (id) => async (dispatch) => {
    dispatch(getPostRequestActionCreator())
    try {
        const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const parsedData = await req.json()
        setTimeout(() => {
            dispatch(getPostReceiveActionCreator(parsedData))
        }, 2000)
    } catch (e) {
        dispatch(getPostFailureActionCreator(e))
    }
}

const newObj1 = {
    method: 'PUT',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}

const fetchUpdatePosts = (id) => async (dispatch) => {
    dispatch(updatePostRequestActionCreator())
    try {
        const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, newObj1)
        const parsedData = await req.json()
        setTimeout(() => {
            dispatch(updatePostReceiveActionCreator(parsedData))
        }, 2000)
    } catch (e) {
        dispatch(updatePostFailureActionCreator(e))
    }
}

const newObj = {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}

const fetchCreatePost = () => async (dispatch) => {
    dispatch( createPostRequestActionCreator())
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts/', newObj)
        const parsedData = await req.json()
        setTimeout(() => {
            dispatch(createPostReceiveActionCreator(parsedData))
        }, 2000)
    } catch (e) {
        dispatch(createPostFailureActionCreator(e))
    }
}

const fetchDeletePost = (id) => async (dispatch) => {
    dispatch( deletePostRequestActionCreator())
    try {
        const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'})
        const parsedData = await req.json()
        setTimeout(() => {
            dispatch(deletePostReceiveActionCreator(parsedData))
        }, 2000)
    } catch (e) {
        dispatch(deletePostFailureActionCreator(e))
    }
}

export default {
    fetchPosts,
    fetchPostById,
    fetchUpdatePosts,
    fetchCreatePost,
    fetchDeletePost
}