import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector, useDispatch } from "react-redux";
import { useMovieComments } from "./modules/movieCommentsModule";
import image_film from './image/image_film_short.svg';
import send_button from './image/send_botton.svg';

function AfterSaving() {
    const test = useMovieComments();
    // let test2 = useSelector(state => state);
    console.log("AfterSaving");
    console.log(test);

    return (
        <>
        <Header displayLogoReturn={false} LifeTime={true} MyPageLogo={true} title="受信箱"/>
        <Footer/>
            
            <body className="App-body">
                <div>
                    <img src={image_film} className="Content-film-short" alt="logo" /> 
                </div>

                <div className="Button">
                    <button className="btn-square-left">いいね</button>
                    <button href="AfterSaving" className="btn-square-center">閲覧済み</button>
                    <button className="btn-square-right">報告</button>
                </div>
                
                <div>
                    <img src={send_button} className="Send-Button" alt="logo" />
                </div>
            </body>
        </>
    );
}

export default AfterSaving;