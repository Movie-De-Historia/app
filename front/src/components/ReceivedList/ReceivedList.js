import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import kachinko_open from "../../image/kachinko_large_open.svg";
import kachinko_close from "../../image/kachinko_large_close.svg";
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";

const ReceivedList = () => {
    // stateの確認用（あとで消す）
    const state = useMovieComments()["movieComments"].list;
    console.log(useMovieComments()["movieComments"]);

    const dispatch = useDispatch();
    // 選ばれたカチンコのIDをstoreのSelectedIdに上書きする
    const setSelectedId = (id) => {
        dispatch(movieCommentsModule.actions.setSelectedId(id));
    }

    return (
        <div>
            <Header title="受信一覧" MyPageLogo={true}/>
            <Footer/>
            <div className="App-body">
                {state.map((review, index) =>(
                    <a key={index} href="/ReceivedBox" onClick={() => {setSelectedId(index)}}>
                        <div className="Content-kachinko">
                            <DisplayKachinko review={review} />
                        </div>
                    </a>
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
