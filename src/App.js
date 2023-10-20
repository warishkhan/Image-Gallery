import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import SinglePhoto from './components/SinglePhoto';

function App() {
  return (
    <>
    {/* creating two routes one for homepage and another one for singlePhoto page */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery/:id" element={<SinglePhoto />}/>
      </Routes>
    </>
  )
}

export default App;
