import { configureStore, getDefaultMiddleware  } from "redux-starter-kit";
// import { rootReducer } from "./modules/rootState";
import movieCommentsModule from "./modules/movieCommentsModule";
import logger from "redux-logger";

// setup 関数を用意してエクスポートする。
export const setupStore = () => {
    const middlewares = [...getDefaultMiddleware()];

    // only development
    if (process.env.NODE_ENV === `development`) {
        middlewares.push(logger);
    }

    const store = configureStore({
        // reducer: rootReducer,
        reducer: movieCommentsModule.reducer,
        middleware: middlewares,
    });

    return store}