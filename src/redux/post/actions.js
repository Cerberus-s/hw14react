import {
    CREATE_POST,
    DELETE_POST,
    GET_POST,
    GET_POSTS,
    UPDATE_POST,
    CLEAR_LIST,
    CLEAR_DATA
} from "./types";


const getPostsRequestActionCreator = () => ({
    type:GET_POSTS.REQUEST
})

const getPostsReceiveActionCreator = (data) => ({
    type: GET_POSTS.RECEIVE,
    payload: data
})

const getPostsFailureActionCreator = (err) => ({
    type:GET_POSTS.FAILURE,
    payload: err
})

const getPostRequestActionCreator = () => ({
    type:GET_POST.REQUEST
})

const getPostReceiveActionCreator = (data) => ({
    type:GET_POST.RECEIVE,
    payload:data
})

const getPostFailureActionCreator = (err) => ({
    type:GET_POST.FAILURE,
    payload:err
})

const updatePostRequestActionCreator = () => ({
    type: UPDATE_POST.REQUEST
})

const updatePostReceiveActionCreator = () => ({
    type:UPDATE_POST.RECEIVE
})

const updatePostFailureActionCreator = (err) => ({
    type:UPDATE_POST.FAILURE,
    payload:err
})

const createPostRequestActionCreator = () => ({
    type:CREATE_POST.REQUEST
})

const createPostReceiveActionCreator = () => ({
    type:DELETE_POST.REQUEST
})

const createPostFailureActionCreator = () => ({
    type:CREATE_POST.RECEIVE
})

const deletePostRequestActionCreator = (err) => ({
    type:CREATE_POST.FAILURE,
    payload:err
})

const deletePostReceiveActionCreator = () => ({
    type:DELETE_POST.RECEIVE
})

const deletePostFailureActionCreator = (err) => ({
    type:DELETE_POST.FAILURE,
    payload:err
})

const clearPostsActionCreator = () => ({
    type:CLEAR_LIST
})

const clearDATAActionCreator = () => ({
    type:CLEAR_DATA
})

export {
    getPostsRequestActionCreator,
    getPostsReceiveActionCreator,
    getPostsFailureActionCreator,

    getPostRequestActionCreator,
    getPostReceiveActionCreator,
    getPostFailureActionCreator,

    updatePostRequestActionCreator,
    updatePostFailureActionCreator,
    updatePostReceiveActionCreator,

    createPostRequestActionCreator,
    createPostFailureActionCreator,
    createPostReceiveActionCreator,

    deletePostRequestActionCreator,
    deletePostReceiveActionCreator,
    deletePostFailureActionCreator,

    clearPostsActionCreator,
    clearDATAActionCreator
}