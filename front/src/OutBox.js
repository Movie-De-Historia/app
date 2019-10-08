import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './OutBox.css';

import Form from './Form'

function OutBox() {
    const title = "OutBox";

    return (
        <>
        <Header displayLogoReturn={true} title="送信箱"/>
        <Footer/>
            
            <body className="App-body-short">
                <Form />
            </body>
        </>
    );
}

export default OutBox;