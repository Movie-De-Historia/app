import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import './Form.css';

const useStyles = makeStyles(theme => ({
    button:{
        width: "21px",
        marginRight: theme.spacing(1),
        '&:hover': {
            background: 'black'
        }
    },

    background: {
        color: "white",
        width: "327px",
        height: "37px",
        backgroundColor: "black",
        fontSize: 18,
        '&:hover': {
            background: 'black'
        }
    },
}));

function Form () {
    const [likeState, setLikeState] = useState(false);
    const [saveState, setSaveState] = useState(false);
    const classes = useStyles({ likeState, saveState });

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [shortText, setShortText] = useState("");
    const [mainText, setMainText] = useState("");
    const titleFunc = (e) => {setTitle(e.target.value)};
    const genreFunc = (e) => {setGenre(e.target.value)};
    const shortTextFunc = (e) => {setShortText(e.target.value)};
    const mainTextFunc = (e) => {setMainText(e.target.value)};
    console.log(title, genre, shortText, mainText);
    console.log(title!=""&&genre!=""&&shortText!=""&&mainText!="")
    console.log(title===""||genre===""||shortText===""||mainText==="")

    function handleClick(e) {
        // 入力していない場所があれば送信できないように変更
        if (title===""||genre===""||shortText===""||mainText===""){
            e.preventDefault();
            console.log("未入力な項目があります.")
        }
    }

    return (
        <form className="styleForm" onClick={handleClick}>
            <input className="title" type="text" placeholder="タイトルを入力" defaultValue="" onChange={titleFunc}/>
            <select className="styleSelect" onChange={genreFunc}>
                <option value="" hidden>ジャンルを選択</option>
                <option value="アニメ">アニメ</option>
                <option value="ドラマ">ドラマ</option>
                <option value="恋愛">恋愛</option>
                <option value="ホラー">ホラー</option>
                <option value="SF">SF</option>
                <option value="アクション">アクション</option>
                <option value="コメディー">コメディー</option>
            </select>
            <textarea className="textareaOnef" name="onef" placeholder="ひとこと" defaultValue="" onChange={shortTextFunc}></textarea>
            <textarea className="textareaDesc" name="desc" placeholder="本文" defaultValue="" onChange={mainTextFunc}></textarea>
            <Fab variant="extended" type="submit" className={ classes.background }>
                送信
            </Fab>
        </form>
    );
}

export default Form;
