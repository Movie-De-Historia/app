import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './OutBox.css';

import Form from '../Form/Form'

function OutBox() {

    return (
        <>
            <Header displayLogoReturn={true} title="Outbox"/>
            <Footer/>
            <Form />
        </>
    );
}

export default OutBox;
