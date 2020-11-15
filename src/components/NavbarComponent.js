import React, { useState } from 'react'
import menu from '../images/menu.png';

export const NavbarComponent = () => {
    const [show, setShow] = useState(false);

    return (
        <React.Fragment>
            <nav className="nav container">
                <div className="navbar">
                    <div className="navbar-brand">
                        <div className="menu">
                            <img 
                                className="menu-icon" 
                                alt="menu icon" 
                                src={menu} 
                                onClick={() => setShow(!show)}
                            />
                        </div>
                        <div className="logo">
                            <i className="material-icons">notifications</i>
                            <span>Blackpeppereats</span>
                        </div>
                    </div>
                    <div className="signin">
                        <a href="/">Sign in</a>
                    </div> 
                </div>
                {show && <div className="drop-menu">
                        <a href="/">Sign in</a>
                    </div> }
            </nav>
        </React.Fragment>
    )
}
