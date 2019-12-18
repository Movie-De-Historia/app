import axios from 'axios';
import movieCommentsModule, { useMovieComments } from "./movieCommentsModule";

export const getPosts = (dispatch) => {
    const token = "9y7DyLFXQqVFsESjPNSBV9fq";
    return async () => {
        // dispatch(movieCommentsModule.actions.getPostsRequest());
        return (
            axios.get(`http://localhost:3000/reviews`)
            .then(res => dispatch(movieCommentsModule.actions.getPostsSuccess(res.data)))
            .then(() => dispatch(movieCommentsModule.actions.updateStateList()))
            .catch(err => dispatch(movieCommentsModule.actions.getPostsFailure(err)))
            // なぜか「，」なら複数行かける．「；」はエラーが出る謎
            // ,
            // console.log("aaa")
        );
    };
};

export const getReviewComment = (dispatch, idx, review_id) => {
    const token = "9y7DyLFXQqVFsESjPNSBV9fq";
    return () => {
        console.log(idx, review_id);
        // dispatch(movieCommentsModule.actions.getPostsRequest());
        return axios.get(`http://localhost:3000/reviews/${review_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => dispatch(movieCommentsModule.actions.getPostsSuccess(res.data)))
            .then(review_id => dispatch(movieCommentsModule.actions.updateStateText(idx, review_id)))
            .catch(err => dispatch(movieCommentsModule.actions.getPostsFailure(err)));
    };
};