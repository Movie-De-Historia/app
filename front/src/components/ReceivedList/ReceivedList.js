import React, {useEffect} from "react";
import { Link } from 'react-router-dom'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import kachinko_open from "../../image/kachinko_large_open.svg";
import kachinko_close from "../../image/kachinko_large_close.svg";
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";
import './ReceivedList.scss'
// import {getReviewComment} from getPosts;
import { getPosts, getReviewComment } from "../../modules/getPost";
// import { useDispatch } from "react-redux";


const ReceivedList = () => {
    // stateの確認用（あとで消す）
    const state = useMovieComments()["movieComments"];
    // console.log(useMovieComments()["movieComments"]);

    const dispatch = useDispatch();
    // 選ばれたカチンコのIDをstoreのSelectedIdに上書きする
    const setSelectedId = (id) => { dispatch(movieCommentsModule.actions.setSelectedId(id)); };
    const list = useMovieComments()["movieComments"].list;

    // const dispatch = useDispatch();
    // const list = useMovieComments()["movieComments"].list;

    // list.forEach((x, idx) => {
    //     console.log(idx, x.backend_id);　// １個ずつとりだせてる
    //     dispatch(movieCommentsModule.actions.getPostsRequest());
    //     // const review = getReviewComment(dispatch, idx, x.backend_id);
    //     // review();
    // });
    // console.log(list);
    // useEffect(() => {
    //     list.forEach(async (x, idx) => {
    //         console.log(idx, x.backend_id);　// １個ずつとりだせてる
    //         const review = getReviewComment(dispatch, idx, x.backend_id);
    //         review();
    //     });
    // }, []);

    // list.forEach(async (x, idx) => {
    //     console.log(idx, x.backend_id);　// １個ずつとりだせてる
    //     const review = getReviewComment(dispatch, idx, x.backend_id);
    //     review();
    // });

    console.log(state);

    const length = state.items.length;
    const latestItems = state.items[length - 1];

    // console.log(latestItems);

    useEffect(() => {
        list.forEach((x, idx) => {
            // console.log(idx, x.backend_id);　// １個ずつとりだせてる
            // dispatch(movieCommentsModule.actions.getPostsRequest());
            // console.log("REVIEW");
            // console.log(idx);
            const review = getReviewComment(dispatch, idx+1, x.backend_id);
            review();
        });
        // console.log(list);
    }, [list]);

    return (
        <div>
            <Header title="受信一覧" MyPageLogo={true}/>
            <Footer/>
            <div className="App-body">
                {list.map((review, index) =>(
                    <Link key={index+1} to="/ReceivedBox" onClick={() => {setSelectedId(index+1)}}>
                        <div className="Content-kachinko">
                            <DisplayKachinko review={review} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const DisplayKachinko = ({review}) => {
    const kachinkoType = (review.id===0) ? kachinko_open : kachinko_close;
    const className1 = "App-logo" + review.id;
    const className2 = (review.id===0) ? "kachinko-open-title" : "kachinko-close-title";

    return(
        <>
            <img src={kachinkoType} className={className1} alt="kachinko-logo" />
            <p className={className2}>
                {review.title}<br/>
                {review.genre}<br/>
                {review.onePhrase}<br/>
            </p>
        </>
    );
}

export default ReceivedList;
