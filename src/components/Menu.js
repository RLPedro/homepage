import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
        <Link className="menu__link" to="/writings">writings</Link>
        <Link className="menu__link" to="https://ricardoleitaopedro.bandcamp.com" target="_blank">music</Link>
        <Link className="menu__link" to="https://github.com/rlpedro" target="_blank">code</Link>
    </div>
  )
};

export default Menu;