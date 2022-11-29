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
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cavities">Gaatjes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appointments">Afspraak maken</NavLink>
                    </li>
                    <li>
                        <NavLink to="/whitening">Tanden bleken</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;