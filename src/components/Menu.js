import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ openMenu, setOpenMenu }) => {

  return (
    <div className="menu">

      <div className={`menu__content open-menu--${openMenu}`} onClick={() => setOpenMenu(false)}>
        <Link className="menu__link" to="/writings">writings</Link>
        <Link className="menu__link" to="https://ricardoleitaopedro.bandcamp.com" target="_blank">music</Link>
        <Link className="menu__link" to="https://github.com/rlpedro" target="_blank">code</Link>
      </div>

      <div className="menu__small-screen" onClick={() => setOpenMenu(!openMenu)}>
        <p className="menu__small-screen__line"></p>
        <p className="menu__small-screen__line"></p>
        <p className="menu__small-screen__line"></p>
      </div>

    </div>
  )
};

export default Menu;