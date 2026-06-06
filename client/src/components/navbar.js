import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { NavLink } from "react-router-dom";
import Logo from "././Logo.png";
import "../styles/navbar.css";

export default function Navbar() {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <nav className="navbar-custom">
            <div className="navbar-container">
                <NavLink className="navbar-logo" to="/">
                    <img src={Logo} alt="Logo Cinelosofia" className="logo-img" />
                </NavLink>
                <ul className="nav-menu">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>LOGIN</NavLink></li>
                    <li><a href="#proximo-encontro" className="nav-link">PARTICIPE</a></li>
                    <li><a href="#acervos" className="nav-link">ACERVOS</a></li>
                    <li><a href="#chat" className="nav-link">CHAT</a></li>
                    <li><a href="#contato" className="nav-link">CONTATO</a></li>
                    {token && (
                        <>
                            <li><NavLink to="/users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>USUÁRIOS</NavLink></li>
                            <li><button onClick={handleLogout} className="nav-link logout-btn">SAIR</button></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}