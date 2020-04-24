import React, { useEffect, useState } from 'react';
import { Link as SLink } from 'react-scroll';

import cn from './Header.module.scss';

function NavLink(props) {
    const _children = props.children;

    return (
        <li className={cn.navLink}>
            <SLink
                to={props.to}
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                activeClass={cn.NavLinkInnerActive}
                onClick={props.onClick}>
                {_children}
            </SLink>
        </li>
    );
}

function CollapsibleNav(props) {
    return (
        <nav className={cn.collapsibleNav}>
            {props.children}
        </nav>
    );
}

export default function Header(props) {
    let [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function handleScroll(e) {
            if (window.scrollY > 64) {
                document.getElementById('header')
                    .classList.add(cn.scrolled);
            } else {
                document.getElementById('header')
                    .classList.remove(cn.scrolled);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleMenuButtonClick(e) {
        if (!menuOpen) {
            document.getElementById('header')
                .classList.add(cn.menuOpen);
            setMenuOpen(true);
        } else {
            document.getElementById('header')
                .classList.remove(cn.menuOpen);
            setMenuOpen(false);
        }
    }

    function handleCloseMenu(e) {
        if (menuOpen) {
            document.getElementById('header')
                .classList.remove(cn.menuOpen);
            setMenuOpen(false);
        }
    }

    return (
        <header className={cn.wrapper} id="header">
            <a href="https://yeovil.ac.uk/" rel="noopener noreferrer" target="_blank"><div className={cn.ycLogo}></div></a>

            <div className={cn.menuButton} onClick={handleMenuButtonClick}>
                <div id="bar1"></div>
                <div id="bar2"></div>
                <div id="bar3"></div>
            </div>

            <CollapsibleNav>
                <ul>
                    <NavLink to={"section-home"} onClick={handleCloseMenu}>Home</NavLink>
                    <NavLink to={"section-course"} onClick={handleCloseMenu}>Course</NavLink>
                    <NavLink to={"section-subject"} onClick={handleCloseMenu}>Subject</NavLink>
                    <NavLink to={"section-deck"} onClick={handleCloseMenu}>The Deck</NavLink>
                    <NavLink to={"section-college"} onClick={handleCloseMenu}>The College</NavLink>
                    <NavLink to={"section-enrol"} onClick={handleCloseMenu}>Enrol</NavLink>
                </ul>
            </CollapsibleNav>
        </header>
    );
}
