import React from 'react';

import cn from './Footer.module.scss';

//! Not the same as NavLink in ./Header.js
function NavLink(props) {
    return (
        <li className={cn.navLink}>
            <a className="" href={props.to} rel="noopener noreferrer" target="_blank">
                {props.children}
            </a>
        </li>
    );
}

export default function Footer() {
    return (
        <footer className={cn.footer}>
            <div className={cn.linkWrapper}>
                <a href="https://yeovil.ac.uk/" rel="noopener noreferrer" target="_blank"><div className={cn.ycLogo}></div></a>
                <ul>
                    <NavLink to="https://yeovil.ac.uk/">Home</NavLink>
                    <NavLink to="https://yeovil.ac.uk/our-courses">Courses</NavLink>
                    <NavLink to="https://yeovil.ac.uk/student-life">Student Life</NavLink>
                    <NavLink to="https://yeovil.ac.uk/events">Events</NavLink>
                    <NavLink to="https://yeovil.ac.uk/contact">Contact Us</NavLink>
                </ul>
                <div className={cn.ofstedBadge}></div>
            </div>

            <div className={cn.copyright}>Design and development by <a
                className="inlineLink"
                href="http://github.com/sam-cross"
                target="_blank"
                rel="noopener noreferrer">
                Sam Cross
                </a> - &copy; 2020</div>
        </footer>
    );
}
