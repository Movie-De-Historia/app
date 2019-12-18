import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReceivedList from './components/ReceivedList/ReceivedList';
import ReceivedBox from './components/ReceivedBox/ReceivedBox';
import OutBox from './components/OutBox/OutBox';
import AfterSaving from './components/AfterSaving/AfterSaving';
import MyPage from './components/MyPage/MyPage';
import SettingDisplay from './components/SettingDisplay/SettingDisplay';
import HistoryList from './components/HistoryList/HistoryList';
import SentList from './components/SentList/SentList';
import './App.css';
import { getPosts, getReviewComment } from './modules/getPost';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "./modules/movieCommentsModule";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchPost() {
            const posts = getPosts(dispatch);
            await posts();
        }
        fetchPost();
    }, []);

    return (
        <BrowserRouter>
            <Route exact path='/' component={ReceivedList} />
            <Route exact path='/ReceivedBox' component={ReceivedBox} />
            <Route exact path='/OutBox' component={OutBox} />
            <Route exact path='/AfterSaving' component={AfterSaving} />
            <Route exact path='/MyPage' component={MyPage} />
            <Route exact path='/SettingDisplay' component={SettingDisplay} />
            <Route exact path='/HistoryList' component={HistoryList} />
            <Route exact path='/SentList' component={SentList} />
        </BrowserRouter>
    );
}

export default App;
