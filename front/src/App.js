import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage'
import ReceivedList from './components/ReceivedList/ReceivedList';
import ReceivedBox from './components/ReceivedBox/ReceivedBox';
import OutBox from './components/OutBox/OutBox';
import AfterSaving from './components/AfterSaving/AfterSaving';
import MyPage from './components/MyPage/MyPage';
import SettingDisplay from './components/SettingDisplay/SettingDisplay';
import HistoryList from './components/HistoryList/HistoryList';
import SentList from './components/SentList/SentList';
import RegisterPage from './components/RegisterPage/RegisterPage';
import './App.css';
import { getPosts } from './modules/getPost';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "./modules/movieCommentsModule";


function App() {
    const dispatch = useDispatch();
    const updateFlag = useMovieComments()["movieComments"].mustUpdate;
    const setOffUpdateState = () => {dispatch(movieCommentsModule.actions.setOffMustUpdateState())};

    useEffect(() => {
        if (updateFlag) {
            async function fetchPost() {
                const posts = getPosts(dispatch);
                await posts();
            }
            fetchPost();
            setOffUpdateState(); // updateFlag=>false
        }
    }, [updateFlag]);

    return (
        <BrowserRouter>
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/RegisterPage' component={RegisterPage} />
            <Route exact path='/ReceivedList' component={ReceivedList} />
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
