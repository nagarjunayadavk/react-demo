import axios from "axios";
import { GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "./actionTypes";


export const getPostsInit = () => ({
    type: GET_POSTS
});
export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    posts
});
export const getPostsFailure = (error) => ({
    type: GET_POSTS_FAILURE,
    error
});

export function getPosts() {
    return dispatch =>{
        dispatch(getPostsInit());
        axios({
            method: 'get',
            url: 'http://localhost:5000/posts'
        })
            .then(response => {
                console.log(response.data);
                dispatch(getPostsSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(getPostsFailure(error.toString()));
            })
    }
    
}