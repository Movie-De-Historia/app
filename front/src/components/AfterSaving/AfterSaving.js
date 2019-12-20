import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import image_film from '../../image/image_film_short.svg';
import './AfterSaving.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ReportIcon from '@material-ui/icons/Report';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    button:{
        width: "21px",
        marginRight: theme.spacing(1),
        '&:hover': {
            background: 'black'
        }
    },

    like: ({ likeState }) => ({
        width: "16px",
        color: likeState ? "red" : "white",
        marginRight: theme.spacing(1),
        '&:hover': {
            background: 'black'
        }
    }),

    save: ({ saveState }) => ({
        width: "21px",
        color: saveState ? "#33cc30" : "white",
        marginRight: theme.spacing(1),
        '&:hover': {
            background: 'black'
        }
    }),

    background: {
        color: "white",
        width: "100px",
        height: "37px",
        backgroundColor: "black",
        '&:hover': {
            background: 'black'
        }
    },

    submit: {
        display: "relative",
        color: "white",
        width: "77px",
        height: "40px",
        left: 274,
        top: 0,
        fontSize: 19,
        padding: 0,
        margin: 0,
        backgroundColor: "black",
        '&:hover': {
            background: 'black'
        }
    },
}));

const AfterSaving = () => {
    let messageText = "";
    const dispatch = useDispatch();
    const reverseLikeState = () => dispatch(movieCommentsModule.actions.reverseLikeState());
    const reverseSaveState = () => dispatch(movieCommentsModule.actions.reverseSaveState());
    const id = useMovieComments()["movieComments"].selectedCommentId;
    const comments = useMovieComments()["movieComments"].list
    const likeState = comments.filter((comment) => comment.id === id)[0].isLikeState;
    const saveState = comments.filter((comment) => comment.id === id)[0].isSaved;
    const title = comments.filter((comment) => comment.id === id)[0].title;
    const genre = comments.filter((comment) => comment.id === id)[0].genre;
    const onePhrase = comments.filter((comment) => comment.id === id)[0].onePhrase;
    const text = comments.filter((comment) => comment.id === id)[0].text;

    const review_id = comments[id-1].backend_id;
    console.log("comments");
    console.log(comments);
    console.log("id")
    console.log(id-1);
    console.log("review_id");
    console.log(review_id);
    const [message, setMessage] = useState("");
    const messageFunc = (e) => {setMessage(e.target.value)};

    function handleSubmit(e) {
        // 入力していない場所があれば送信できないように変更
        if (message==="") {
            e.preventDefault();
            console.log("未入力な項目があります.")
        }
    }

    const onSubmitMessage = () => {
        // // messageTextがnullか空のときは何もしない
        // if (!messageText) {
        //     // デバック用，あとで消す
        //     console.log("送信できません");
        //     return;
        // }

        // デバック用，あとで消す
        console.log("送信完了");
        // tokenと一緒にメッセージ内容をreduxに渡し，保存する
        // やっぱり保存する必要ないかも(一応保存しておく)
        dispatch(movieCommentsModule.actions.saveMessageInput(messageText));

        // messageの送信
        async function postMessage() {
            await axios.post(`http://localhost:3000/message`,
            {
                "review_id": review_id,
                "message": message,
            }
            )
            .then(res => console.log(res));
        }
        postMessage();
    };

    const classes = useStyles({ likeState, saveState});

    return (
        <>
        <Header displayLogoReturn={false} LifeTime={true} MyPageLogo={true} title="Inbox"/>
        <Footer displayColor />

        <div className="App-body1">
            <div className="film-short">
                <img src={image_film} alt="logo" />
                <div className="textTop"> { title }<br/>{ genre }<br/>{ onePhrase }</div>
                <div className="textBottom"> { text } </div>
            </div>

            {/* <div className="buttonList">
                <Fab variant="extended" className={classes.background} onClick={() => reverseLikeState()} >
                    <FavoriteIcon className={classes.like}/>
                    いいね
                </Fab>

                <Fab variant="extended" className={classes.background} onClick={() => reverseSaveState()}>
                    <SaveAltIcon className={classes.save}/>
                    保存
                </Fab>

                <Fab variant="extended" className={classes.background}>
                    <ReportIcon className={classes.button}/>
                    報告
                </Fab>
            </div> */}

            <Fab variant="extended" className={classes.background} onClick={reverseLikeState}>
                <FavoriteIcon className={classes.like}/>
                いいね
            </Fab>

            <form className="messageInput" onSubmit={onSubmitMessage}>
                <input className="messageText" type="text" placeholder="メッセージを入力" onChange={messageFunc} defaultValue=""/>
                <Button className={classes.submit} type="submit" onClick={handleSubmit}>送信</Button>
            </form>
        </div>
        </>
    );
}

export default AfterSaving;
