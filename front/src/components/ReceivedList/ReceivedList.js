import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import kachinko_open from "../../image/kachinko_large_open.svg";
import kachinko_close from "../../image/kachinko_large_close.svg";
import { useDispatch, useSelector } from "react-redux";
import movieCommentsModule from "../../modules/movieCommentsModule";

function ReceivedList() {
    // stateの確認用（あとで消す）
    // stateの中身を確認するために使用している（後で変更する）
    const useMovieComments = () => {return useSelector(state => state);};

    const state = useMovieComments()["movieComments"].list;
    console.log(useMovieComments()["movieComments"]);

    const dispatch = useDispatch();
    // 選ばれたカチンコのIDをstoreのSelectedIdに上書きする
    const setSelectedId = (id) => {
        console.log(id+1);
        dispatch(movieCommentsModule.actions.setSelectedId(id+1));

        console.log("-------------------");
        console.log(useMovieComments);
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
    const kachinkoType = (review.id===1) ? kachinko_open : kachinko_close;
    const className1 = "App-logo" + review.id;
    const className2 = (review.id===1) ? "kachinko-open-title" : "kachinko-close-title";

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
