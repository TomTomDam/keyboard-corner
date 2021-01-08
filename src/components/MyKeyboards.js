import React from 'react'

function MyKeyboards() {
    return (
        <div className="">
            <div class="page-header">
                <h1>My Keyboards</h1>
                <p>This is a list of my keyboards that I've purchased or built.</p>
            </div>
            <div class="mykeyboards-section">
                <h3>Space65 Cybervoyager</h3>
                <p>
                    Parts list:
                    <ul className="mykeyboards-parts-list">
                        <li><b>Layout: </b>65%</li>
                        <img className="mykeyboards-cover-image" src="src\assets\images\MyKeyboards\Space65 ePBT Kuro Shiro 1.jpg"/>
                        <li><b>Keycap set: </b>ePBT Kuro Shiro</li>
                        <li><b>Switches: </b>Massdrop Holy Panda</li>
                        <li><b>Switch mods: </b>Krytox 203g0, Krytox 105 for springs</li>
                        <li><b>Case: </b>Space65 Black and Gold</li>
                        <li><b>Plate: </b>Space65 Carbon Fibre</li>
                        <li><b>Stabilizers: </b>Durock Clear</li>
                        <li><b>Other mods: </b>Case foam</li>
                    </ul>
                </p>
                <div class="mykeyboards-gallery">
                </div>
            </div>
            <div class="mykeyboards-section">
                <h3>Custom 60%</h3>
                <p>
                    Parts list:
                    <ul className="mykeyboards-parts-list">
                        <li><b>Layout: </b>60% w/ arrow keys</li>
                        <img className="mykeyboards-cover-image" src="src\assets\images\MyKeyboards\FirstCustomKeyboard2.jpg"/>
                        <li><b>Keycap set: </b>ePBT 9009</li>
                        <li><b>Switches: </b>Gateron Yellow</li>
                        <li><b>Switch mods: </b>Krytox 205g0, Krytox 105 for springs</li>
                        <li><b>Case: </b>KBDFans 5° 60% Aluminium Case - Gray</li>
                        <li><b>PCB: </b>DZ60 Rev3 RGB Underglow USB-C</li>
                        <li><b>Plate: </b>DZ60 CNC Aluminium, Layout A (2u left shift)</li>
                        <li><b>Stabilizers: </b>GMK Screw-in</li>
                        <li><b>Other mods: </b>Case foam - Neoprene 3mm</li>
                    </ul>
                </p>
                <div class="mykeyboards-gallery">
                </div>
            </div>
        </div>
    )
}

export default MyKeyboards;