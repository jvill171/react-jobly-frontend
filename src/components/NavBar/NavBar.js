import React from "react";
import "./NavBar.css"
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="navbar">
            <div className="logo">
                <Link activeClassName="" to="/">Jobly</Link>
            </div>
            <ul className="nav-NavLinks">
                
                {/* IF AUTHENTICATED */}
                <li>
                </li>
                <li>
                    <NavLink to="/companies" >
                        Companies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/jobs" >
                        Jobs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <Link to="#">
                        Signout
                    </Link>
                </li>
                {/* IF AUTHENTICATED */}
                
                <li>||</li> {/* TEMPORARY DIVIDER, dividing Auth and UnAuth items */}
                
                {/* IF NOT AUTHENTICATED */}
                <li>
                    <NavLink to="/login" >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signup" >
                        Signup
                    </NavLink>
                </li>
                {/* IF NOT AUTHENTICATED */}
                
                
            </ul>
        </nav>
    )
}

export default NavBar;