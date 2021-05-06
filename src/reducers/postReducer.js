import { ADD_POST_FAILURE, ADD_POST_INIT, ADD_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_INIT, DELETE_POST_SUCCESS, GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "../actions/actionTypes";


const initialState = {
    loading: false,
    posts: [],
    error: ''
}

export function postsStore(state = initialState, action) {

    switch (action.type) {
        case GET_POSTS:
            return { ...state, loading: true }
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.posts, loading: false }
        case GET_POSTS_FAILURE:
            return { ...state, error: action.error, loading: false }
        case ADD_POST_INIT:
            return { ...state, loading: true }
        case ADD_POST_SUCCESS:
            return { ...state, posts: [...state.posts, action.post ], loading: false }
        case ADD_POST_FAILURE:
            return { ...state, error: action.error, loading: false  }
        case DELETE_POST_INIT:
            return { ...state, loading: true }
        case DELETE_POST_SUCCESS:
            return { ...state, posts: state.posts.filter(x => x.id !== action.postid), loading: false }
        case DELETE_POST_FAILURE:
            return { ...state, error: action.error,loading: false }
        default:
            return state;
    }

}