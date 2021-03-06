import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import history_list from '../../image/HistoryList.svg';
import './HistoryList.css';

function HistoryList() {
    return (
        <>
            <Header displayLogoReturn={true} title="視聴履歴一覧"/>
            <Footer/>

            <div className="movie-parent">
                <img src={history_list} className="movie" alt="logo" />
                {/*<p>
                    
                    <h3>
                        タイトル<br/>
                        ジャンル<br/>
                        ひとこと<br/>
                    </h3>
                    
                </p>*/}
            </div>
        </>
    );
}

export default HistoryList;
