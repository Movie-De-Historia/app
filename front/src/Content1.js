import React from 'react';
import Header from './Header';
import Footer from './Footer';
import kachinko_open from './kachinko_open.svg';
import kachinko_close from './kachinko_close.svg';

function Content1() {
    const title = "タイトル！";
    return (
        <>
            <Header/>
            <Footer/>

            <body className="App-body">
                <a href="/Content2">
                    <div className="Content-kachinko">
                            <img src={kachinko_open} className="App-logo1" alt="logo" />
                        <p className="Content-kachinko-open-title">
                        {title}<br/>
                        ジャンル<br/>
                        ひとこと<br/>
                        </p>
                    </div>
                </a>

                <a href="/Content3">
                    <div className="Content-kachinko">
                        <img src={kachinko_close} className="App-logo2" alt="logo" />
                        <p className="Content-kachinko-open-title">
                        タイトル<br/>
                        ジャンル<br/>
                        ひとこと<br/>
                        </p>
                    </div>
                </a>

                <a href="/Content4">
                    <div className="Content-kachinko">
                        <img src={kachinko_close} className="App-logo3" alt="logo" />
                        <p className="Content-kachinko-open-title">
                        タイトル<br/>
                        ジャンル<br/>
                        ひとこと<br/>
                        </p>
                    </div> 
                </a>
            </body>
        </>
    );
}

export default Content1;