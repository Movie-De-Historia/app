import axios from 'axios';
import movieCommentsModule, { useMovieComments } from "./movieCommentsModule";
import { useDispatch } from "react-redux";

export const getPosts = (dispatch) => {
    return async () => {
        await dispatch(movieCommentsModule.actions.getPostsRequest());
        return axios.get(`http://localhost:3000/reviews`)
            .then(res => dispatch(movieCommentsModule.actions.getPostsSuccess(res.data)))
            .then(() => dispatch(movieCommentsModule.actions.updateStateList()))
            .catch(err => dispatch(movieCommentsModule.actions.getPostsFailure(err)));
    };
};

export const getReviewComment = (review_id) => {
    console.log("=====review_id=====");
    console.log(review_id);
    const token = "9y7DyLFXQqVFsESjPNSBV9fq";
    return () => {
        const dispatch = useDispatch();
        dispatch(movieCommentsModule.actions.getPostsRequest());
        return axios.get(`http://localhost:3000/reviews/${review_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => dispatch(movieCommentsModule.actions.getPostsSuccess(res.data)))
            .catch(err => dispatch(movieCommentsModule.actions.getPostsFailure(err)));
    };
};