import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RestroList from './RestroList';
import AddRestro from './AddRestro';
import EditRestro from './EditRestro';
import RestroTable from './RestroTable';
import Navbar from './Navbar';
import CreateUser from './CreateUser';
import UserTable from './UserTable';
import EditUser from './EditUser';


export default function RouterPage() {
  return (
    <div>
   
<BrowserRouter>

<Navbar/>
      <Routes>

        <Route path="/AddRestro" element={<AddRestro />}/> 
        <Route path="/edit/:id" element={<EditRestro />}/> 
        <Route path="/editUser/:id" element={<EditUser />}/> 
        <Route path="/" element={<RestroList />}/> 
        <Route path="/RestroTable" element={<RestroTable />}/> 
        <Route path="/CreateUser" element={<CreateUser />}/> 
        <Route path="/UserTable" element={<UserTable />}/> 
      </Routes>
    </BrowserRouter>


    </div>
  )
}
