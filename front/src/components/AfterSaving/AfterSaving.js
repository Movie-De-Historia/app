import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useMovieComments } from "../../modules/movieCommentsModule";
import image_film from '../../image/image_film_short.svg';
import send_button from '../../image/send_botton.svg';

function AfterSaving() {
    const test = useMovieComments();
    // let test2 = useSelector(state => state);
    console.log("AfterSaving");
    console.log(test);

    return (
        <div>
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
                
                <div>
                    <img src={send_button} className="Send-Button" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default AfterSaving;
