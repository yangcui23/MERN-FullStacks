import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './views/Detail';

import Main from './views/Main';
function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/product' element={<Main/>} />
        <Route path='/product/:id' element={<Detail/>} />
        <Route path='/product/:id/update' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
