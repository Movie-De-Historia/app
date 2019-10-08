import React from 'react';
import Header from './Header';
import Footer from './Footer';
import kachinko_open from './kachinko_large_open.svg';
import kachinko_close from './kachinko_large_close.svg';

function ReceivedList() {
    const title = "タイトル";
    return (
        <>
            <Header title="受信一覧" MyPageLogo={true}/>
            <Footer/>

            <body className="App-body">
                <a href="/ReceivedBox">
                    <div className="Content-kachinko">
                            <img src={kachinko_open} className="App-logo1" alt="logo" />
                        <p className="Content-kachinko-open-title">
                            <h3>
                                {title}<br/>
                                ジャンル<br/>
                                ひとこと<br/>
                            </h3>
                        </p>
                    </div>
                </a>

                <a href="/ReceivedBox">
                    <div className="Content-kachinko">
                        <img src={kachinko_close} className="App-logo2" alt="logo" />
                        <p className="Content-kachinko-close-title">
                            <h3>
                                {title}<br/>
                                ジャンル<br/>
                                ひとこと<br/>
                            </h3>
                        </p>
                    </div>
                </a>

                <a href="/ReceivedBox">
                    <div className="Content-kachinko">
                        <img src={kachinko_close} className="App-logo3" alt="logo" />
                        <p className="Content-kachinko-close-title">
                            <h3>
                                {title}<br/>
                                ジャンル<br/>
                                ひとこと<br/>
                            </h3>
                        </p>
                    </div> 
                </a>
            </body>
        </>
    );
}

export default ReceivedList;