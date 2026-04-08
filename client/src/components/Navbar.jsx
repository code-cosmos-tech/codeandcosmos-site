import { useState } from 'react';
import { NavLink } from 'react-router';
import { useContact } from './ContactProvider';
import ScrambledText from './ScrambledText';
import "./Navbar.css";

export function Navbar() {
    const [menu, setMenu] = useState(false);
    const {handleContact} = useContact();
    const [hasInteracted, setHasInteracted] = useState(false);

    const handleClick = () => {
        setHasInteracted(true);
        setMenu(!menu)
    }

    return (
        <header className='header'>
            <div className={hasInteracted ? menu ? "header-down header-up-down" : "header-up header-up-down" : "notInteracted"}>
                <div className="nav-links">
                    <span><NavLink className={"nav-link"} to={'/work'} onClick={handleClick}>Work / </NavLink></span>
                    <span><NavLink className={"nav-link"} to={'/service'} onClick={handleClick}>Services</NavLink></span><br/>
                    <span><NavLink className={"nav-link"} to={'/agency'} onClick={handleClick}>Agency / </NavLink></span>
                    <span><NavLink className={"nav-link"} to={'/careers'} onClick={handleClick}>Careers</NavLink></span><br/>
                    <span className={"nav-link"} onClick={() => {handleClick();  handleContact()}}>Contact</span>
                </div>
            </div>
            <div className="header-inner">
                <span className='logo-container'>
                    <span>
                        <NavLink to={'/'} className="logo">
                        <ScrambledText 
                            className="scrambled-text-demo"
                            radius={80}
                            duration={0.5}
                            speed={0.8}
                            scrambleChars=".?&"
                        >
                            Code&Cosmos
                        </ScrambledText>
                        </NavLink>
                    </span>
                    <span className="headline">One byte at a time</span>
                </span>

                <nav className='tabs'>
                    <span><NavLink to={'/work'} className={"nav-link"}>
                        <ScrambledText 
                            className="scrambled-text-demo"
                            radius={80}
                            duration={0.5}
                            speed={0.8}
                            scrambleChars=".?&"
                        >
                            Work
                        </ScrambledText>
                    </NavLink></span>
                    <span><NavLink to={'/service'} className={"nav-link"}>
                        <ScrambledText 
                            className="scrambled-text-demo"
                            radius={80}
                            duration={0.5}
                            speed={0.8}
                            scrambleChars=".?&"
                        >
                            Services
                        </ScrambledText>
                    </NavLink></span>
                    <span><NavLink to={'/agency'} className={"nav-link"}>
                        <ScrambledText 
                            className="scrambled-text-demo"
                            radius={80}
                            duration={0.5}
                            speed={0.8}
                            scrambleChars=".?&"
                        >
                            Agency
                        </ScrambledText>
                    </NavLink></span>
                    <span><NavLink to={'/careers'} className={"nav-link"}>
                        <ScrambledText 
                            className="scrambled-text-demo"
                            radius={80}
                            duration={0.5}
                            speed={0.8}
                            scrambleChars=".?&"
                        >
                            Careers
                        </ScrambledText>
                    </NavLink></span>
                </nav>
                <button className="btn" onClick={handleContact}>Contact</button>
                <div className="menu" onClick={handleClick}>{menu ? "Close" : "Menu"}</div>
            </div>
        </header>
    );
}
