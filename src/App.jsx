import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import PhotoListContainer from './components/PhotoListContainer/PhotoListContainer';
import PhotoCategoryContent from './components/PhotoCategoryContent/PhotoCategoryContent';




function App() {
  return (
    <div className="App">
    
      <BrowserRouter>

        <NavBar />
        <Routes>
              <Route path='/' element= { <PhotoCategoryContent /> } />
              <Route path='/category/:idCategory' element= { <PhotoListContainer /> } />
              <Route path='/aboutme' element= { <AboutMe /> } />
              <Route path='/contact' element= { <Contact /> } />
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App;


