import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './navbar.css';

import { navbarLinks } from '../../objects';

import navLogo from '../../assets/navbar-logo.png'

import { Link } from "react-router-dom";

const NavBar = () => {

    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
            }
        }


        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        console.log('going to page section ', value)
    }
    return (
        <>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand className ="nav-logo">
                        <Link to="/">
                            <img src={navLogo} alt="Logo" />
                        </Link>  
                    </Navbar.Brand>

                    {/* <Navbar.Brand href="/">
                        <img src={navLogo} alt="Logo" />
                    </Navbar.Brand> */}
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navbarLinks.map((link)=>{
                                return(
                                    <Link key={link.id} to={`/${link.hyperlink}`} className ={activeLink === link.hyperlink ? 'active nav-links' : 'nav-links'} onClick={() => onUpdateActiveLink(link.hyperlink)}>{link.title}</Link>
                                )
                            })}

                            {/* <Link to="/" className ={activeLink === 'home' ? 'active nav-links' : 'nav-links'} onClick={() => onUpdateActiveLink('home')}>Home</Link>
                            <Link to="/partyOptions" className ={activeLink === 'partyOptions' ? 'active nav-links' : 'nav-links'} onClick={() => onUpdateActiveLink('partyOptions')}>Party Options</Link>
                            <Link to="/about" className ={activeLink === 'about' ? 'active nav-links' : 'nav-links'} onClick={() => onUpdateActiveLink('about')}>About</Link>
                            <Link to="/book" className ={activeLink === 'book' ? 'active nav-links' : 'nav-links'} onClick={() => onUpdateActiveLink('book')}>Book</Link>                            */}
                            
                            {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#technologies" className={activeLink === 'technologies' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('technologies')}>Party Styles</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>FAQs</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href="#book" className={activeLink === 'book' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('book')}>Book Now</Nav.Link> */}
                        </Nav>

                        
                        {/* <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.instagram.com/MonsterBouncyHouses/"><img src={navIcon3} alt="" /></a>
                            </div>
                        </span> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </> 
    )
}

export default NavBar;

{/* <Link className ="nav-link" to="/signin">
    Sign In
</Link> */}