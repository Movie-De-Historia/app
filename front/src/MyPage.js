import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MyPage() {
    return (
        <>
            <Header displayLogoReturn={true} title="マイページ"/>
            <Footer/>
        </>
    );
}

export default MyPage;
