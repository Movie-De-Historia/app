import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SentList() {
    return (
        <>
            <Header displayLogoReturn={true} title="送信済み一覧"/>
            <Footer/>
        </>
    );
}

export default SentList;
