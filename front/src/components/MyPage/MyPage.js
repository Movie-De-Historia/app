import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function MyPage() {
    return (
        <>
            <Header displayLogoReturn={true} title="マイページ"/>
            <Footer/>
        </>
    );
}

export default MyPage;
