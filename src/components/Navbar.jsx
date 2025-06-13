import { useState } from 'react';
import { NavLink } from 'react-router';
import { useContact } from './ContactProvider';
import "./Navbar.css";

export function Navbar() {
    const [menu, setMenu] = useState(false);
    const {handleContact} = useContact();

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <header className='header'>
            <div className={menu ? "header-down header-up-down" : "header-up header-up-down"}>
                <div className='nav'>
                    <span>
                        <span><NavLink to={'/'} onClick={handleClick} className="logo">Code&Cosmos</NavLink></span>
                        <span className="headline">One byte at a time</span>
                    </span>
                    <div className="menu" onClick={handleClick}>{menu ? "Close" : "Menu"}</div>
                </div>
                <div className="nav-links">
                    <span><NavLink className={"nav-link"} to={'/work'} onClick={handleClick}>Work / </NavLink></span>
                    <span><NavLink className={"nav-link"} to={'/service'} onClick={handleClick}>Services</NavLink></span><br/>
                    <span><NavLink className={"nav-link"} to={'/agency'} onClick={handleClick}>Agency / </NavLink></span>
                    <span><NavLink className={"nav-link"} to={'/careers'} onClick={handleClick}>Careers</NavLink></span><br/>
                    <span className={"nav-link"} onClick={() => {handleClick();  handleContact()}}>Contact</span>
                </div>
            </div>
            <div className="header-inner">
                <span>
                    <span><NavLink to={'/'} className="logo">Code&Cosmos</NavLink></span>
                    <span className="headline">One byte at a time</span>
                </span>

                <nav className='tabs'>
                    <span><NavLink to={'/work'} className={"nav-link"}>Work</NavLink></span>
                    <span><NavLink to={'/service'} className={"nav-link"}>Services</NavLink></span>
                    <span><NavLink to={'/agency'} className={"nav-link"}>Agency</NavLink></span>
                    <span><NavLink to={'/careers'} className={"nav-link"}>Careers</NavLink></span>
                </nav>
                <button className="btn" onClick={handleContact}>Contact</button>
                <div className="menu" onClick={handleClick}>{menu ? "Close" : "Menu"}</div>
            </div>
        </header>
    );
}
