import {
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./views/Main";
import Update from "./components/update";
import Form from "./components/form";
import NotFound from "./views/notfound";



function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes> 
        <Route path="/" element={<Main/>}/>
        <Route path="/new" element={<Form/>}/>
        <Route path="/:id/update" element={<Update/>}/>
        <Route path="notfound" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
