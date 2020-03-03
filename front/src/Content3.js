import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image_film from './image_film_short.svg';
import logo_botton from './logo_botton.svg';
import send_botton from './send_botton.svg';
import { Link } from 'react-router-dom'

function Content3() {
    const title = "Content3";

    return (
        <>
        <Header displayLogoReturn={true}/>
        <Footer/>
            
            <body className="App-body-short">
                <div className="Content-film-short">
                    <img src={image_film} className="App-logo1" alt="logo" />
                    <p className="Content-kachinko-open-title"> {title}<br/> </p>
                </div>

                <div className="Button">
                    <img src={logo_botton} className="Left-Button" alt="logo" />
                    {/*
                    <Link to="Content1"> <img src={logo_botton} className="Left-Button" alt="logo" /> </Link>
                    */}
                    <img src={logo_botton} className="Center-Button" alt="logo" />
                    <img src={logo_botton} className="Right-Button" alt="logo" />
                </div>

                <div className="Send-Button">
                    <img src={send_botton} className="Send-Button2" alt="logo" />
                </div>
            </body>
        </>
    );
}

export default Content3;