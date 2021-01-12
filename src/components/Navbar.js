import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-toggleable-sm box-shadow mb-3">
        <Link to="/" className="navbar-brand">
          Keyboard Corner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto my-2">
            <li>
              <Link to="/keyboard-encyclopedia" className="nav-link mx-4">
                The Keyboard Encyclopedia
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link mx-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mykeyboards" className="nav-link mx-4">
                My Keyboards
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link mx-4">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link mx-4">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
