import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image_film from './image_film_short.svg';
import logo_botton from './logo_botton.svg';
import send_botton from './send_botton.svg';
import { Link } from 'react-router-dom'

// この画面は現在使っていないので後々削除予定
function Content4() {
    const title = "Content4";

    return (
        <>
        <Header displayLogoReturn={true} title="送信箱"/>
        <Footer/>
            
            <body className="App-body-short">
                <div className="Content-film-short">
                    <img src={image_film} className="App-logo1" alt="logo" />
                    <p className="Content-kachinko-open-title"> {title}<br/> </p>
                </div>

                <div className="Button">
                    <img src={logo_botton} className="Content4-Left-Button" alt="logo" />
                    <img src={logo_botton} className="Content4-Right-Button" alt="logo" />
                </div>
                
                <div className="Send-Button">
                    <img src={send_botton} className="Send-Button2" alt="logo" />
                </div>
            </body>
        </>
    );
}

export default Content4;