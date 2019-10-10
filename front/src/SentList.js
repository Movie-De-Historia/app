import React from 'react';
import Header from './Header';
import Footer from './Footer';

function SentList() {
    return (
        <>
        <Header displayLogoReturn={true} title="送信済み一覧"/>
        <Footer/>
        </>
    );
}

export default SentList;