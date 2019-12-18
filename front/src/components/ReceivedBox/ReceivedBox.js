import React, { useEffect } from 'react';
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
import { getReviewComment } from '../../modules/getPost';

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
}));

function ReceivedBox() {
    const dispatch = useDispatch();
    const reverseLikeState = () => dispatch(movieCommentsModule.actions.reverseLikeState());
    const reverseSaveState = () => dispatch(movieCommentsModule.actions.reverseSaveState());
    const id = useMovieComments()["movieComments"].selectedCommentId;
    const comments = useMovieComments()["movieComments"].list;
    const likeState = comments.filter((comment) => comment.id === id)[0].isLikeState;
    const saveState = comments.filter((comment) => comment.id === id)[0].isSaved;
    const title = comments.filter((comment) => comment.id === id)[0].title;
    const genre = comments.filter((comment) => comment.id === id)[0].genre;
    const onePhrase = comments.filter((comment) => comment.id === id)[0].onePhrase;
    const text = comments.filter((comment) => comment.id === id)[0].text;
    const classes = useStyles({ likeState, saveState });

    // useEffect(() => {
    //     const review = getReviewComment(dispatch, );
    //     review();
    // }, []);

    return (
        <>
        <Header displayLogoReturn={true} MyPageLogo={true} title="受信箱"/>
        <Footer/>

        <div className="App-body">
            <div className="film-short">
                <img src={image_film} alt="logo" />
                <div className="textTop"> { title }<br/>{ genre }<br/>{ onePhrase }</div>
                <div className="textBottom"> { text } </div>
            </div>

            <div className="buttonList">
                <Fab variant="extended" className={classes.background} onClick={() => reverseLikeState()} >
                    <FavoriteIcon className={classes.like}/>
                    いいね
                </Fab>

                <Link to="AfterSaving" className="Link">
                    <Fab variant="extended" className={classes.background} onClick={() => reverseSaveState()}>
                        <SaveAltIcon className={classes.save}/>
                        保存
                    </Fab>
                </Link>

                <Fab variant="extended" className={classes.background}>
                    <ReportIcon className={classes.button}/>
                    報告
                </Fab>
            </div>
        </div>
        </>
    );
};

export default ReceivedBox;
