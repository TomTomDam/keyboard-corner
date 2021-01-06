import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Keyboard Corner</h1>
      <Link to="/">Home</Link> | <Link to="/keyboards">Keyboards</Link> | <Link to="/about">About</Link>
    </header>
  );
}

export default Header;
