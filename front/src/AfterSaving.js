import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image_film from './image_film_short.svg';
import logo_button from './logo_botton.svg';
import send_button from './send_botton.svg';

function AfterSaving() {
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