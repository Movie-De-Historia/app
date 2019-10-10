import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReceivedList from './ReceivedList';
import ReceivedBox from './ReceivedBox';
import OutBox from './OutBox';
import AfterSaving from './AfterSaving';
import MyPage from './MyPage';
import Setting from './Setting';
import HistoryList from './HistoryList';
import SentList from './SentList';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Route exact path='/ReceivedList' component={ReceivedList} />
          <Route exact path='/ReceivedBox' component={ReceivedBox} />
          <Route exact path='/OutBox' component={OutBox} />
          <Route exact path='/AfterSaving' component={AfterSaving} />
          <Route exact path='/MyPage' component={MyPage} />
          <Route exact path='/Setting' component={Setting} />
          <Route exact path='/HistoryList' component={HistoryList} />
          <Route exact path='/SentList' component={SentList} />
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
