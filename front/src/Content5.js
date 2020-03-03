import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image_film from './image_film_short.svg';
import logo_long_botton from './logo_long_button.svg';
import Rectangle from './rectangle.svg';
import { Link } from 'react-router-dom'

import Form from './Form'

function Content5() {
    const title = "Content5";

    return (
        <>
        <Header displayLogoReturn={true} title="送信箱"/>
        <Footer/>
            
            <body className="App-body-short">
                <Form />
                {/*
                <div className="Rectangle">
                    <img src={Rectangle} className="Content5-Rectangle" alt="logo" />
                </div>
                */}
                
                {/*<div className="Long-Button">
                    <img src={logo_long_botton} className="Content5-Long-Button" alt="logo" />
                </div>*/}

            </body>
        </>
    );
}

export default Content5;