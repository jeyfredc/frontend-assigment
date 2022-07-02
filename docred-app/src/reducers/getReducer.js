import { types } from "./types/types";

const initialState = {
    article: "",
  };

export const getReducer = (state = initialState, action ) => {

    switch (action.type) {
        case types.article:
            return {
                ...state,
                article: action.payload
            }
    
        default:
            return state;
    }

}