import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import CountReports from "./CountReports";

import Favorite from "./Favorite";

function App() {
  return  <Router>
  <nav className='container-nav'>
    <div className='fio'>
    
      <p className='return-home '>{'<<'} На главную</p> 
      <p className='login '>Иванов Иван Иванович</p>
    </div>
  <div className='group-link'>
    <Link to="/" className='link'>общие Отчеты</Link>
    <Link to="/favorite" className='link'>мои отчеты</Link>
  </div> 
  
  
</nav>

<Routes>

  
  <Route path="/" element={<CountReports/>}/>
  <Route path="/favorite" element={<Favorite/>}/>
  
</Routes>

</Router>




}

export default App;
