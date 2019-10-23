import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
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

    save: {
        width: "21px",
        color: "#33cc30",
        marginRight: theme.spacing(1),
        '&:hover': {
            background: 'black'
        }
    },

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
    const useSelectedId = () => {return useSelector(state => state["movieComments"].selectedCommentId);};
    const id = useSelectedId()
    const dispatch = useDispatch();
    const onChangeMessage = (e) => { messageText = e.target.value };
    const onSubmitMessage = () => {
        // messageTextがnullか空のときは何もしない
        if (!messageText) {
            // デバック用，あとで消す
            console.log("送信できません");
            return;
        }

        // デバック用，あとで消す
        console.log("送信完了");
        // tokenと一緒にメッセージ内容をreduxに渡し，保存する
        dispatch(movieCommentsModule.actions.saveMessageInput(messageText));
    };

    const [likeState, setLikeState] = useState(false);
    const classes = useStyles({ likeState });

    return (
        <>
        <Header displayLogoReturn={false} LifeTime={true} MyPageLogo={true} title="受信箱"/>
        <Footer displayColor />

        <div className="App-body1">
            <img src={image_film} className="film-short" alt="logo" />

            <div className="buttonList">
                <Fab variant="extended" className={classes.background} onClick={() => setLikeState(!likeState)} >
                    <FavoriteIcon className={classes.like}/>
                    いいね
                </Fab>

                <Fab variant="extended" className={classes.background}>
                    <SaveAltIcon className={classes.save}/>
                    保存
                </Fab>

                <Fab variant="extended" className={classes.background}>
                    <ReportIcon className={classes.button}/>
                    報告
                </Fab>
            </div>

            <form className="messageInput" onSubmit={onSubmitMessage}>
                <input className="messageText" type="text" placeholder="メッセージを入力" onChange={onChangeMessage} defaultValue=""/>
                <Button className={classes.submit} type="submit">送信</Button>
            </form>
        </div>
        </>
    );
}

export default AfterSaving;
