import axios from "axios";
import { ADD_POST_FAILURE, ADD_POST_INIT, ADD_POST_SUCCESS, 
    DELETE_POST_FAILURE, 
    DELETE_POST_INIT, 
    DELETE_POST_SUCCESS, 
    GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "./actionTypes";


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


export const addPostInit = () => ({
    type: ADD_POST_INIT
});
export const addPostSuccess = (post) => ({
    type: ADD_POST_SUCCESS,
    post
});
export const addPostFailure = (error) => ({
    type: ADD_POST_FAILURE,
    error
});

export function addPost(post) {
    return dispatch =>{
        dispatch(addPostInit());
        axios({
            method: 'post',
            url: 'http://localhost:5000/posts',
            data: post
        })
            .then(response => {
                console.log(response.data);
                dispatch(addPostSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(addPostFailure(error.toString()));
            })
    }
    
}

export const deletePostInit = () => ({
    type: DELETE_POST_INIT
});
export const deletePostSuccess = (postid) => ({
    type: DELETE_POST_SUCCESS,
    postid
});
export const deletePostFailure = (error) => ({
    type: DELETE_POST_FAILURE,
    error
});

export function deletePost(postId) {
    return dispatch =>{
        dispatch(deletePostInit());
        axios({
            method: 'delete',
            url: 'http://localhost:5000/posts/' + postId
        })
            .then(response => {
                console.log(response.data);
                dispatch(deletePostSuccess(postId));
            })
            .catch(error => {
                console.log(error);
                dispatch(deletePostFailure(error.toString()));
            })
    }
    
}
