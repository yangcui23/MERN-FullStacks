import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './views/Detail';
import Update from "./views/Update";
import Main from './views/Main';
function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link to={'/product'}>Product</Link>
      <Routes>
        <Route path='/product' element={<Main/>} />
        <Route path='/product/:id' element={<Detail/>} />
        <Route path='/product/:id/update' element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
