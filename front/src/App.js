import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Route exact path='/Content1' component={Content1} />
          <Route exact path='/Content2' component={Content2} />
          <Route exact path='/Content3' component={Content3} />
          <Route exact path='/Content4' component={Content4} />
          <Route exact path='/Content5' component={Content5} />
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
