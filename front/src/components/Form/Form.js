import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import './Form.css';
import axios from 'axios';

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

    function handleClick(e) {
        // 入力していない場所があれば送信できないように変更
        if (title===""||genre===""||shortText===""||mainText===""){
            e.preventDefault();
            console.log("未入力な項目があります.");
        } else {
            async function postMessage() {
                await axios.post(`http://localhost:3000/reviews`,
                {
                    "user_id": 1, // userの判別はまだ行えてないので仮で与えている
                    "genre_id": genre,
                    "movie_title": title,
                    "head_text": shortText,
                    "comment": mainText,
                    "spoiler": false, // ネタバレは現在ボタンがないため，一応falseを与えておく
                }
                )
                .then(res => console.log(res));
            }
            postMessage();
        }
    }

    return (
        <form className="styleForm">
            <input className="title" type="text" placeholder="タイトルを入力" defaultValue="" onChange={titleFunc}/>
            <select className="styleSelect" onChange={genreFunc}>
                <option value="" hidden>ジャンルを選択</option>
                <option value="1">アクション</option>
                <option value="2">SF</option>
                <option value="3">コメディ</option>
                <option value="4">サスペンス</option>
                <option value="5">時代劇</option>
                <option value="6">児童</option>
                <option value="7">ミステリー</option>
                <option value="8">ホラー</option>
                <option value="9">探偵</option>
                <option value="10">スペクタル</option>
                <option value="11">スポーツ</option>
                <option value="12">青春</option>
                <option value="13">ノスタルジー</option>
                <option value="14">西部劇</option>
                <option value="15">パニック</option>
                <option value="16">ファミリー</option>
                <option value="17">プロパガンダ</option>
                <option value="18">音楽</option>
                <option value="19">恋愛</option>
                <option value="20">連続活劇</option>
                <option value="21">剣戟</option>
                <option value="22">ロードムービー</option>
                <option value="23">成人</option>
                <option value="24">レズビアン・ゲイ</option>
            </select>
            <textarea className="textareaOnef" name="onef" placeholder="ひとこと" defaultValue="" onChange={shortTextFunc}></textarea>
            <textarea className="textareaDesc" name="desc" placeholder="本文" defaultValue="" onChange={mainTextFunc}></textarea>
            <Fab variant="extended" type="submit" className={ classes.background } onClick={handleClick}>
                送信
            </Fab>
        </form>
    );
}

export default Form;
