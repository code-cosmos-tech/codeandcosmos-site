import { useState } from 'react';
import { NavLink } from 'react-router';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-inner">
                <h1 className="logo">Code & Cosmos</h1>

                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    <NavLink to={'/service'} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
                    <NavLink to={'/contact'} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                    <NavLink to={'/craftmen'} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                </nav>
            </div>
        </header>
    );
}
