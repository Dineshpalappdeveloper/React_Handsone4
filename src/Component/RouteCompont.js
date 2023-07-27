import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import {  Route, Routes } from "react-router-dom";
import StudentEdit from "./StudentEdit";

const RouteCompo = ()=>{
    return(
        <>
          
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/student" element={<Student/>}></Route>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/student-edit" element={<StudentEdit/>}></Route>
            </Routes>
          
        </>
    )
}

export default RouteCompo