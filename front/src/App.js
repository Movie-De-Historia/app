import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReceivedList from './ReceivedList';
import Content2 from './Content2';
import ReceivedBox from './ReceivedBox';
import Content4 from './Content4';
import OutBox from './OutBox';
import AfterSaving from './AfterSaving';
import MyPage from './MyPage';
import Setting from './Setting';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Route exact path='/ReceivedList' component={ReceivedList} />
          <Route exact path='/Content2' component={Content2} />
          <Route exact path='/ReceivedBox' component={ReceivedBox} />
          <Route exact path='/Content4' component={Content4} />
          <Route exact path='/OutBox' component={OutBox} />
          <Route exact path='/AfterSaving' component={AfterSaving} />
          <Route exact path='/MyPage' component={MyPage} />
          <Route exact path='/Setting' component={Setting} />
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
