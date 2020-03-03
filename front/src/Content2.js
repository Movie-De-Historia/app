import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image_film from './image_film.svg';

function Content2() {
    const title = "Content2";
    
    return (
        <>
            <Header displayColor="gray" />
            <Footer displayColor="gray" />

            <body className="App-body">
                <div className="Content-kachinko">
                    <img src={image_film} className="App-logo1" alt="logo" />
                    <p className="Content-kachinko-open-title">
                    {title}<br/>
                    </p>
                </div>
            </body>
        </>
    );
}

export default Content2;