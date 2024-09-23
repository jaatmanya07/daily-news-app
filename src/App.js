import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const pageNumber = 15;
  const[progress, setProgress]=useState(0);
  const apiKey=process.env.REACT_APP_NEWS_API
  return (
    <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exect path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageNumber} country="in" category="general" />}></Route>
            <Route exect path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageNumber} country="in" category="general" />}></Route>
            <Route exect path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageNumber} country="in" category="entertainment" />}></Route>
            <Route exect path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageNumber} country="in" category="business" />}></Route>
            <Route exect path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageNumber} country="in" category="health" />}></Route>
            <Route exect path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageNumber} country="in" category="science" />}></Route>
            <Route exect path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageNumber} country="in" category="sports" />}></Route>
            <Route exect path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageNumber} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
