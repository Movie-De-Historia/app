import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image_film from './image_film_short.svg';
import logo_botton from './logo_botton.svg';
import send_botton from './send_botton.svg';
import { Link } from 'react-router-dom'

function ReceivedBox() {
    return (
        <>
        <Header displayLogoReturn={true} MyPageLogo={true} title="受信箱"/>
        <Footer/>
            
            <body className="App-body">
                <div>
                    <img src={image_film} className="Content-film-short" alt="logo" />
                </div>

                <div className="Button">
                    <button className="btn-square-left">いいね</button>
                    <Link to="AfterSaving">
                        <button href="AfterSaving" className="btn-square-center">保存</button>
                    </Link>
                    <button className="btn-square-right">報告</button>
                </div>
            </body>
        </>
    );
}

export default ReceivedBox;