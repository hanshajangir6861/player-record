import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Admin from './Admin.jsx'
import User from './User'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Routes>
    <Route path ="/" element ={<Admin/>}></Route>
    <Route path ="/User" element ={<User/>}></Route>

  </Routes>
  
  </BrowserRouter>
)
