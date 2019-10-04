import React from 'react';
import kachinko_open from './kachinko_open.svg';
import kachinko_close from './kachinko_close.svg';

function Content1() {
    return (
        <body className="App-body">
            <div className="Content-kachinko">
                <img src={kachinko_open} className="App-logo1" alt="logo" />
                <p className="Content-kachinko-open-title">
                タイトル<br/>
                ジャンル<br/>
                ひとこと<br/>
                </p>
            </div>

            <div className="Content-kachinko">
                <img src={kachinko_close} className="App-logo2" alt="logo" />
                <p className="Content-kachinko-open-title">
                タイトル<br/>
                ジャンル<br/>
                ひとこと<br/>
                </p>
            </div>

            <div className="Content-kachinko">
                <img src={kachinko_close} className="App-logo3" alt="logo" />
                <p className="Content-kachinko-open-title">
                タイトル<br/>
                ジャンル<br/>
                ひとこと<br/>
                </p>
            </div>
        </body>
    );
}

export default Content1;