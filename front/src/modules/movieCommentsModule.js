import { createSlice } from "redux-starter-kit";
import { useSelector } from "react-redux";

const movieCommentsInitialState = {
    selectedCommentId: 1,
    savedTime: 0,
    isFetching: false,
    items: [],
    list: [
        {
            id: 1,
            backend_id: 1,
            title: "タイトル1",
            genre: "ジャンル1",
            onePhrase: "ひとこと1",
            text:"コメント１コメント１コメント１コメント１コメント１",
            isLikeState: false,
            isSaved: false,
            imgType: "kachinko_open",
            messageInput: "",
        },
        {
            id: 2,
            backend_id: 2,
            title: "タイトル2",
            genre: "ジャンル2",
            onePhrase: "ひとこと2",
            text: "コメント２コメント２コメント２コメント２コメント２",
            isLikeState: false,
            isSaved: false,
            imgType: "kachinko_close",
            messageInput: "",
        },
        {
            id: 3,
            backend_id: 3,
            title: "タイトル3",
            genre: "ジャンル3",
            onePhrase: "ひとこと3",
            text: "コメント３コメント３コメント３コメント３コメント３",
            isLikeState: false,
            isSaved: false,
            imgType: "kachinko_close",
            messageInput: "",
        },
    ]
};

const movieCommentsModule = createSlice({
    slice: "movieComments",
    initialState: movieCommentsInitialState,
    reducers: {
        // stateの状態を初期化する
        initializeState: (state, action) => {
            state = movieCommentsInitialState;
        },

        // いいねの状態を変更する
        reverseLikeState: (state, action) => {
            const id = state.selectedCommentId;
            state.list.forEach(comment => {
                comment.isLikeState =
                    comment.id === id ? !comment.isLikeState : comment.isLikeState;
            });
        },

        // 保存の状態を変更する
        reverseSaveState: (state, action) => {
            const id = state.selectedCommentId;
            state.list.forEach(comment => {
                comment.isSaved =
                    comment.id === id ? !comment.isSaved : comment.isSaved;
            });
        },

        // どのカチンコが選択されたかをIDで記憶する
        setSelectedId: (state, action) => {
            const id = action.payload;
            state.selectedCommentId = id;
        },

        // ユーザ（あるいはトークン）と一緒にメッセージ内容を保存する
        saveMessageInput: (state, action) => {
            const selectedId = state.selectedCommentId;
            const text = action.payload;
            state.list.forEach((comment, index) => {
                comment.messageInput =
                    selectedId === index ? text : comment.messageInput;
            });
        },

        saveTime: (state, action) => {
            state.savedTime = action.payload;
        },

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

        updateStateList: (state) => {
            if (state.isFetching == false) {
                const length = state.items.length;
                const latestItems = state.items[length - 1];
                state.list.forEach((x, idx) => {
                    x.title = latestItems.items[idx].movie_title;
                    x.onePhrase = latestItems.items[idx].head_text;
                    x.genre = latestItems.items[idx].genre_name;
                    x.backend_id = latestItems.items[idx].id;
                });
            }
        },

        updateStateText: (state, action) => {
            if (state.isFetching == false) {
                const idx = action.payload;
                const length = state.items.length;
                const latestItems = state.items[length - 1];
                state.list.forEach((x, index) => {
                    x.text = idx === (index+1) ? latestItems.items.comment : x.text;
                });
            }
        },
    }
});

export const useMovieComments = () => { return useSelector(state => state); };

export default movieCommentsModule;
