import React from 'react'
import { useState, useEffect } from 'react';
import './Landing.css'
import { Navbar, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Landing() {


    // OFF CANVAS
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Navbar Active
    const [activeLink, setActiveLink] = useState('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            if (
                section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos
            ) {
                setActiveLink(section.getAttribute('id'));
            }
        });
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (

        <>

            <section className='main'>


                <Navbar fixed="top">


                    <Navbar.Collapse id="basic-navbar-nav">



                        <Navbar.Brand href="#"><img src="/logo-2-removebg-preview.png" className='img-fluid' alt="" /></Navbar.Brand>


                        <Nav className="ml-auto hidden">


                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''}>
                                Home
                            </Nav.Link>


                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active' : ''}>
                                About
                            </Nav.Link>


                            <Nav.Link href="#services" className={activeLink === 'services' ? 'active' : ''}>
                                Services
                            </Nav.Link>




                            <Nav.Link href="#pricing" className={activeLink === 'contact' ? 'active' : ''}>
                                Contact
                            </Nav.Link>


                        </Nav>


                        <div className='hidden socail-link'>

                            <a href="" ><i class="fa-brands fa-facebook-f me-4"></i></a>
                            <a href="" ><i class="fa-brands fa-instagram me-4"></i></a>
                            <a href=""  > <i class="fa-brands fa-x-twitter me-4"></i></a>
                            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>

                        </div>


                        <button className='btn-off' onClick={handleShow}><i class="fa-solid fa-bars"></i></button>


                    </Navbar.Collapse>


                </Navbar>



                {/* off Canvas*/}
                <Offcanvas show={show} onHide={handleClose} className='shadow' style={{ border: 'none' }}>

                    <Offcanvas.Header closeButton>

                    </Offcanvas.Header>


                    <Offcanvas.Body>

                        <div className='pt-3'>

                            <a href="#home" onClick={handleClose} className='nav-link off-nav'>Home</a>
                            <a href="#about" onClick={handleClose} className='nav-link off-nav'>About</a>
                            <a href="#service" onClick={handleClose} className='nav-link off-nav'>Services</a>
                            <a href="#contact" onClick={handleClose} className='nav-link off-nav'>Contact</a>

                        </div>


                    </Offcanvas.Body>


                </Offcanvas>


            </section>



        </>

    )
}

export default Landing