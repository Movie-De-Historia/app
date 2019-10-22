import { combineReducers } from "redux-starter-kit";
import movieCommentsModule from "./movieCommentsModule";

export const rootReducer = combineReducers({
    movieComments: movieCommentsModule.reducer,
});

export default rootReducer;