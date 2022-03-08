import React from "react";
import { NavLink } from "react-router-dom";

import { BackButton } from "../../components";
import "./style.css";

const Header = () => {
    return (
        <nav role="navigation">
            <BackButton />
            <NavLink exact to="/" activeClassName="current">
                Homepage
            </NavLink>
            <NavLink exact to="/about" activeClassName="current">
                About
            </NavLink>
            <NavLink exact to="/works" activeClassName="current">
                Works
            </NavLink>
        </nav>
    );
};
export default Header;
