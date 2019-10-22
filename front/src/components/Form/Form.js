import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PublishIcon from '@material-ui/icons/Publish';
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

    return (
        <form className="styleForm">
            <input className="title" type="text" placeholder="タイトルを入力" defaultValue="" />
            <select className="styleSelect">
                <option value="" hidden>ジャンルを選択</option>
                <option value="1">アニメ</option>
                <option value="2">ドラマ</option>
                <option value="3">恋愛</option>
                <option value="4">ホラー</option>
                <option value="5">SF</option>
                <option value="6">アクション</option>
                <option value="7">コメディー</option>
            </select>
            <textarea className="textareaOnef" name="onef" placeholder="ひとこと" defaultValue=""></textarea>
            <textarea className="textareaDesc" name="desc" placeholder="本文" defaultValue=""></textarea>
            <Fab variant="extended" type="submit" className={ classes.background }>
                送信
            </Fab>            
        </form>
    );
}

export default Form;
