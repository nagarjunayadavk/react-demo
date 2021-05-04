import { GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "../actions/actionTypes";


const initialState = {
    laading: false,
    posts: []
}

export function postsStore(state = initialState, action) {

    switch (action.type) {
        case GET_POSTS:
            return {...state, loading: true}
        case GET_POSTS_SUCCESS:
            return {...state, posts: action.posts, loading: false }
        case GET_POSTS_FAILURE:
            return {}
        default:
            return state;
    }

}