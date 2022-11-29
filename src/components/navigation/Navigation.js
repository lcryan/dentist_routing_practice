import React from 'react';
import {NavLink} from "react-router-dom";

import './Navigation.css';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>De Tandenborstel</h4>

                <ul>
                    <li>
                        <NavLink to="/" className="default-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cavities" className="default-link">Gaatjes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appointments" className="default-link">Afspraak maken</NavLink>
                    </li>
                    <li>
                        <NavLink to="/whitening" className="default-link">Tanden bleken</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;