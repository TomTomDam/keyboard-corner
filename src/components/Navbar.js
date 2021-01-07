import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-toggleable-sm box-shadow mb-3">
            <a class="navbar-brand">
                Keyboard Corner
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse" id="navbarNav">
                <ul class="navbar-nav ml-auto my-2">
                    <li>
                        <Link to="/keyboard-encyclopedia" className="nav-link mx-4">The Keyboard Encyclopedia</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link mx-4">Home</Link>
                    </li>
                    <li>
                        <Link to="/mykeyboards" className="nav-link mx-4">My Keyboards</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link mx-4">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;