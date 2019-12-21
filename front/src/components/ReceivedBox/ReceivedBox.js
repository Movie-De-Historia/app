import React from 'react';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import image_film from '../../image/image_film_short.svg';
import { Link } from 'react-router-dom';
import './ReceivedBox.scss'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ReportIcon from '@material-ui/icons/Report';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    button:{
        width: "21px",
        // marginRight: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

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
        width: "300px",
        height: "37px",
        top: "10px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black",
        '&:hover': {
            background: 'black'
        }
    },
}));

function ReceivedBox() {
    const dispatch = useDispatch();
    const reverseLikeState = () => dispatch(movieCommentsModule.actions.reverseLikeState());
    const reverseSaveState = () => dispatch(movieCommentsModule.actions.reverseSaveState());
    const setInboxPath = (path) => dispatch(movieCommentsModule.actions.setInboxPath(path));
    setInboxPath("/AfterSaving")
    const id = useMovieComments()["movieComments"].selectedCommentId;
    const comments = useMovieComments()["movieComments"].list;
    const likeState = comments.filter((comment) => comment.id === id)[0].isLikeState;
    const saveState = comments.filter((comment) => comment.id === id)[0].isSaved;
    const title = comments.filter((comment) => comment.id === id)[0].title;
    const genre = comments.filter((comment) => comment.id === id)[0].genre;
    const onePhrase = comments.filter((comment) => comment.id === id)[0].onePhrase;
    const text = comments.filter((comment) => comment.id === id)[0].text;
    const classes = useStyles({ likeState, saveState });
    const setOnIsSelectedState = () => dispatch(movieCommentsModule.actions.setOnIsSelected());
    // 文字数の長さによってフォントサイズを変える
    const textTop = (title.length > 11) || (onePhrase.length > 11) ? "miniTextTop" : "textTop";
    console.log(title.length);
    console.log(onePhrase.length);

    return (
        <>
        <Header displayLogoReturn={true} MyPageLogo={true} title="Inbox"/>
        <Footer/>

        <div className="App-body2">
            <div className="film-short">
                <img src={image_film} alt="logo" />
                <div className={textTop}> { title }<br/>{ genre }<br/>{ onePhrase }</div>
                <div className="textBottom"> { text } </div>
            </div>

            {/* <div className="buttonList">　 */}
                {/* <Fab variant="extended" className={classes.background} onClick={() => {reverseLikeState()}} >
                    <FavoriteIcon className={classes.like}/>
                    いいね
                </Fab> */}

            <Link to="/AfterSaving" className="Link">
                {/* <Fab variant="extended" className={classes.background} onClick={() => {reverseSaveState();setOnIsSelectedState();}}> */}
                <Fab variant="extended" className={classes.background} onClick={setOnIsSelectedState}>
                    みたい！！！
                </Fab>
            </Link>
{/*
                <Fab variant="extended" className={classes.background}>
                    <ReportIcon className={classes.button}/>
                    報告
                </Fab> */}
            {/* </div>  */}
        </div>
        </>
    );
};

export default ReceivedBox;
