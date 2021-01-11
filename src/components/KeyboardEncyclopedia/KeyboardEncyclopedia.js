import React from "react";
import { Link } from "react-router-dom";

function KeyboardEncyclopedia() {
  return (
    <div className="container-article">
      <header className="">
        <h1 className="heading">The Keyboard Encyclopedia</h1>
        <p className="">
          Your comprehensive guide to all things related to mechanical
          keyboards.
        </p>
      </header>
      <div className="keyboard-encyclopedia-section">
        <h2 className="heading">Index</h2>
        <hr />
        <ul className="keyboard-encyclopedia-list">
          <li>
            <Link to="/keyboard-encyclopedia/introduction">
              Introduction to Mechanical Keyboards
            </Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/layouts-and-sizes">
              Layouts And Sizes
            </Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/switches">Switches</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/plates-and-pcbs">
              Plates and PCBs
            </Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/keycaps">Keycaps</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/stabilizers">Stabilizers</Link>
          </li>
        </ul>
      </div>
      <div className="keyboard-encyclopedia-section">
        <h3 className="heading keyboard-encyclopedia-heading">
          List of Switches
        </h3>
        <hr />
        <ul className="keyboard-encyclopedia-list">
          <li>
            <Link to="/keyboard-encyclopedia/switches/cherry">Cherry</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/switches/gateron">Gateron</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/switches/kailh">Kailh</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/switches/durock">Durock</Link>
          </li>
        </ul>
      </div>
      <div className="keyboard-encyclopedia-section">
        <h3 className="heading keyboard-encyclopedia-heading">
          Mechanical Keyboard Modifications
        </h3>
        <hr />
        <ul className="keyboard-encyclopedia-list">
          <li>
            <Link to="/keyboard-encyclopedia/switch-modifications">
              Switch Modifications
            </Link>
          </li>
        </ul>
      </div>
      <div className="keyboard-encyclopedia-section">
        <h3 className="heading keyboard-encyclopedia-heading">Accessories</h3>
        <hr />
        <ul className="keyboard-encyclopedia-list">
          <li>
            <Link to="/keyboard-encyclopedia/custom-cables">Custom Cables</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default KeyboardEncyclopedia;
