import { createSlice } from "redux-starter-kit";
import { useSelector } from "react-redux";

const InitialState = {
    // tokenは取得済みと仮定
    // tokenの取得に関しては，別途issueを立ち上げてそちらで解決する
    token: "9y7DyLFXQqVFsESjPNSBV9fq",
    isFetching: false,
    items: []
};

const postModule = createSlice({
    slice: "post",
    initialState: InitialState,
    reducers: {
        getPostsRequest: (state) => {
            state.items.push({
                isFetching: true,
            });
        },

        getPostsSuccess: (state, action) => {
            state.items.push({
                isFetching: false,
                items: action.payload,
                lastUpdated: Date.now(),
            });
        },

        getPostsFailure: (state, action) => {
            state.items.push({
                isFetching: false,
                error: action.payload,
            });
        },
    }
});

export const usePost = () => { return useSelector(state => state); };

export default postModule;
