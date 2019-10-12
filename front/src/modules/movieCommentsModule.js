import { createSlice } from "redux-starter-kit";
import { useSelector } from "react-redux";

const movieCommentsInitialState = {
    selectedCommentId: 0,

    list: [
        {
            id: 1,
            title: "タイトル1",
            genre: "ジャンル1",
            onePhrase: "ひとこと1",
            text:"コメント１コメント１コメント１コメント１コメント１",
            isLikeState: false,
            isSaved: false,
            imgType: "kachinko_open",
        },
        {
            id: 2,
            title: "タイトル2",
            genre: "ジャンル2",
            onePhrase: "ひとこと2",
            text: "コメント２コメント２コメント２コメント２コメント２",
            isLikeState: false,
            isSaved: false,
            imgType: "kachinko_close",
        },
        {
            id: 3,
            title: "タイトル3",
            genre: "ジャンル3",
            onePhrase: "ひとこと3",
            text: "コメント３コメント３コメント３コメント３コメント３",
            isLikeState: false,
            isSaved: false,
            imgType: "kachinko_close",
        },
    ]
};

const movieCommentsModule = createSlice({
    slice: "movieComments",
    initialState: movieCommentsInitialState,
    reducers: {
        changeLikeState: (state, action) => {
            const id = action.payload;  
            state.list.forEach(comment => {
                comment.isLikeState =
                    comment.id === id ? !comment.isLikeState : comment.isLikeState;
            });
        },

        setSelectedId: (state, action) => {
            const id = action.payload;
            console.log("setSelectedId, reducer")
            state.selectedCommentId = id;
        },

        // add: (state, action) => {(state+1)},
    }
});

export const useMovieComments = () => {return useSelector(state => state);};

export default movieCommentsModule;
