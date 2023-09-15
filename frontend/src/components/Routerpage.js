import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RestroList from './RestroList';
import AddRestro from './AddRestro';
import EditRestro from './EditRestro';
import RestroTable from './RestroTable';
import Navbar from './Navbar';


export default function RouterPage() {
  return (
    <div>
   
<BrowserRouter>

<Navbar/>
      <Routes>

        <Route path="/AddRestro" element={<AddRestro />}/> 
        <Route path="/edit/:id" element={<EditRestro />}/> 
        <Route path="/" element={<RestroList />}/> 
        <Route path="/RestroTable" element={<RestroTable />}/> 
      </Routes>
    </BrowserRouter>


    </div>
  )
}
