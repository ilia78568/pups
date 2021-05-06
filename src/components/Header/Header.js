import React from 'react'
import './header.css'
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <NavLink to="/" activeClassName="selected" style={{ textDecoration: 'none' }} >
                <div className="logo"></div>
            </NavLink>

            <div className="navlink">
                <NavLink to="/about" activeClassName="selected" style={{ textDecoration: 'none' }}>
                    <div className="link">О компании</div>
                </NavLink>
                <NavLink to="/services" activeClassName="selected" style={{ textDecoration: 'none' }}>
                    <div className="link">Услуги</div>
                </NavLink>
                <NavLink to="/portfolio" activeClassName="selected" style={{ textDecoration: 'none' }}>
                    <div className="link">Портфолио</div>
                </NavLink>
                <NavLink to="/contacts" activeClassName="selected" style={{ textDecoration: 'none' }}>
                    <div className="link">Контакты</div>
                </NavLink>
            </div>
        </header>
    )
}