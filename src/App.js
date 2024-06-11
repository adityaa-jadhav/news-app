import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  

  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route path="/" element={<NewsComp setProgress={this.setProgress}  key="home" pageSize={6} country="in" category="general"/>} />
            <Route path="/about" element={<About setProgress={this.setProgress} />} />
            <Route exact path="/entertainment" element={<NewsComp setProgress={this.setProgress}  key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
            <Route exact path="/general" element={<NewsComp setProgress={this.setProgress}  key="general" pageSize={6} country="in" category="general"/>} />
            <Route exact path="/health" element={<NewsComp setProgress={this.setProgress}  key="health" pageSize={6} country="in" category="health"/>} />
            <Route exact path="/science" element={<NewsComp setProgress={this.setProgress}  key="science" pageSize={6} country="in" category="science"/>} />
            <Route exact path="/sports" element={<NewsComp setProgress={this.setProgress}  key="sports" pageSize={6} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<NewsComp setProgress={this.setProgress}  key="technology" pageSize={6} country="in" category="technology"/>} />
            <Route exact path="/business" element={<NewsComp setProgress={this.setProgress}  key="business" pageSize={6} country="in" category="business"/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
