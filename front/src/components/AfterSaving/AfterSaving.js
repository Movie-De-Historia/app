import React from 'react';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import image_film from '../../image/image_film_short.svg';
import './AfterSaving.css';

function AfterSaving() {
    let messageText = "";
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

    return (
        <>
        <Header displayLogoReturn={false} LifeTime={true} MyPageLogo={true} title="受信箱"/>
        <Footer displayColor />
            
        <div className="App-body">
            <div>
                <img src={image_film} className="Content-film-short" alt="logo" /> 
            </div>

            <div className="Button">
                <button className="btn-square-left">いいね</button>
                <button href="AfterSaving" className="btn-square-center">閲覧済み</button>
                <button className="btn-square-right">報告</button>
            </div>

            <form className="messageInput" onSubmit={onSubmitMessage}>
                <input className="messageText" type="text" placeholder="メッセージを入力" onChange={onChangeMessage} defaultValue=""/><br/>
                <button className="submitButton" type="submit">投稿</button>
            </form>
        </div>
        </>
    );
}

export default AfterSaving;
