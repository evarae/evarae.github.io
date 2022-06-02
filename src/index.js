import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import './index.css';
import Landing from './routes/landing/Landing';
import Home from './routes/home/Home';
import Releases from './routes/releases/Releases';
import Contact from './routes/contact/Contact';
import About from './routes/about/About';
import Gigs from './routes/gigs/Gigs';
import PressKit from "./routes/pressKit/PressKit";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router basename="/ripship"> */}
    <Router>
        <div>
          <Routes>
            <Route path='/' element={<Navigate to = '/home'/>}/>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/releases' element={<Releases/>}/>
            <Route path='/gigs' element={<Gigs/>}/>
            <Route path='/presskit' element={<PressKit/>}/>
            <Route path='*' element={<Navigate to = '/landing'/>}/>
          </Routes>
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
