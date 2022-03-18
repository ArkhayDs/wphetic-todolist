import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Todolist from "./Todolist/Todolist";
import Gradient from "./Gradient/Gradient";


export default function Header() {
    return (
        <>
            <Router>
                <div className="bg-dark row" style={{height:'150px'}}>
                    <Navbar />
                    <br />
                    <h1 className="text-white text-center">WPhetic - Todo list</h1>
                </div>
                <Routes>
                    <Route path="/" element={<Todolist />} />
                    <Route path="/todo" element={<Todolist />} />
                    <Route path="/gradient" element={<Gradient />} />
                </Routes>
            </Router>
        </>
    )
}