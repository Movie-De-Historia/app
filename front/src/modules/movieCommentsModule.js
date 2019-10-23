import { createSlice } from "redux-starter-kit";

const movieCommentsInitialState = {
    selectedCommentId: 0,

    messageInput: [],

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
        // いいねの状態を変更する
        changeLikeState: (state, action) => {
            const id = action.payload;  
            state.list.forEach(comment => {
                comment.isLikeState =
                    comment.id === id ? !comment.isLikeState : comment.isLikeState;
            });
        },

        // どのカチンコが選択されたかをIDで記憶する
        setSelectedId: (state, action) => {
            const id = action.payload;
            state.selectedCommentId = id;
        },

        // ユーザ（あるいはトークン）と一緒にメッセージ内容を保存する
        saveMessageInput: (state, action) => {
            const text = action.payload;
            // token(or User)はとりあえず固定（後で変更する）
            const token = "9y7DyLFXQqVFsESjPNSBV9fq";
            state.messageInput.push({ token: {token}, text: {text} });
        },
    }
});

export default movieCommentsModule;
