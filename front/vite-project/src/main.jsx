import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './Admin.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from './Search.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Routes>
    <Route path ="/" element ={<Admin/>}></Route>
    <Route path ="/Search" element ={<Search/>}></Route>


  </Routes>
  
  </BrowserRouter>
)
