import { ADD_LIKE, ADD_POSTS, DELETE_POSTS, EDIT_POSTS, GET_POSTS } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case ADD_POSTS:
            return [action.payload, ...state];
        case EDIT_POSTS:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        content: action.payload.content
                    }
                } else return post;
            })
        case DELETE_POSTS:
            return state.filter((postId) => postId.id !== action.payload.postId);
        case ADD_LIKE:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        likes: action.payload.likes
                    }
                } else return post;
            })
        default:
            return state;
    }
}