import React, {useEffect} from "react";
import { Link } from 'react-router-dom'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import kachinko_open from "../../image/kachinko_large_open.svg";
import kachinko_close from "../../image/kachinko_large_close.svg";
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";
import './ReceivedList.scss'
import { getReviewComment } from "../../modules/getPost";


const ReceivedList = () => {
    // stateの確認用（あとで消す）
    const state = useMovieComments()["movieComments"];
    // Inboxの移動先Path
    const InboxPath = useMovieComments()["movieComments"].InboxPath;

    const dispatch = useDispatch();
    // 選ばれたカチンコのIDをstoreのSelectedIdに上書きする
    const setSelectedId = (id) => { dispatch(movieCommentsModule.actions.setSelectedId(id)); };
    const list = useMovieComments()["movieComments"].list;

    const setOnIsSelectedState = () => dispatch(movieCommentsModule.actions.setOnIsSelected());

    useEffect(() => {
        list.forEach((x, idx) => {
            const review = getReviewComment(dispatch, idx+1, x.backend_id);
            review();
        });
    }, [list]);

    return (
        <div>
            <Header title="Inbox" MyPageLogo={true}/>
            <Footer/>
            <div className="App-body">
                {list.map((review, index) =>(
                    // <Link key={index+1} to="/ReceivedBox" onClick={() => {setSelectedId(index+1)}}>
                    <Link key={index+1} to={InboxPath} onClick={() => {setSelectedId(index+1); if (InboxPath==="/AfterSaving") {setOnIsSelectedState()}}}>
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
    const className = "logo" + review.id;
    const title = "title" + review.id;
    const genre = "genre" + review.id;
    const onePhrase = "onePhrase" + review.id;
    return(
        <>
            <img src={kachinko_close} className={className} alt="kachinko-logo" />
            {/* <p className="kachinko_close"> */}
                {/* {review.title}<br/> */}
                {/* {review.genre}<br/> */}
                {/* {review.onePhrase}<br/> */}
            {/* </p> */}
            <div className={title}>{review.title}</div>
            <div className={genre}>{review.genre}</div>
            <div className={onePhrase}>{review.onePhrase}</div>
            {/* <p className="kachinko_close">
            <font size="4">{review.title}<br/></font>
            <font size="3">{review.genre}<br/></font>
            <font size="3">{review.onePhrase}<br/></font> */}
                {/* {review.genre}<br/> */}
                {/* {review.onePhrase}<br/> */}
            {/* </p> */}
        </>
    );
}

export default ReceivedList;
