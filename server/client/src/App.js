import React from 'react'
import 'antd/dist/antd.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './components/HomePage';
import MyPage from './components/UserPage/MyPage';
import ConverterPage from './components/ConverterPage/ConverterPage';
import ConverterScorePage from './components/ConverterPage/ConverterScorePage';
import LoginPage from './components/LoginPage/LoginPage';
import UniPage from './components/UniPage/UniPage';
import EduContentPage from './components/EduPage/EduContentPage';

function App() {
  return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/mypage" component={MyPage}/>
          <Route exact path="/converter" component={ConverterPage}/>
          <Route exact path="/converter/score" component={ConverterScorePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/uni/info" component={UniPage} />
          <Route exact path="/edu/contents" component={EduContentPage} />
          <Route />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
