import {
    getPostsFailureActionCreator,
    getPostsReceiveActionCreator,
    getPostsRequestActionCreator
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


export default {fetchPosts}
