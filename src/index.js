import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/landing/Landing';
import Home from './routes/home/Home';

import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/ripship">
        <div>
          <Routes>
            <Route path='/' element={<Navigate to = '/landing'/>}/>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='*' element={<p>404 Not Found!!</p>}/>
          </Routes>
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
