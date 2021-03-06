import { configureStore, getDefaultMiddleware  } from "redux-starter-kit";
import rootReducer from "./modules/rootState";
import logger from "redux-logger";

export const setupStore = () => {
    const middlewares = [...getDefaultMiddleware()];

    // only development
    if (process.env.NODE_ENV === `development`) {
        middlewares.push(logger);
    }

    const store = configureStore({
        reducer: rootReducer,
        middleware: middlewares,
    });

    return store}
