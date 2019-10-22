import { combineReducers } from "redux-starter-kit";
import movieCommentsModule from "./movieCommentsModule";

const rootReducer = combineReducers({
    movieComments: movieCommentsModule.reducer,
});

export default rootReducer;