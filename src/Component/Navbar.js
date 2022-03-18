import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/">TodoList</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/gradient">Gradient</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}