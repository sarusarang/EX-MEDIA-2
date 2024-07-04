import React from 'react'
import { useState, useEffect } from 'react'
import './Landing.css'
import { Navbar, Nav } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Hero from '../Components/Hero'
import HowWe from '../Components/HowWe'
import About from '../Components/About'
import Services from '../Components/Services'
import Clients from '../Components/Clients'
import Contact from '../Components/Contact'

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


    // For Scroll


    const [scrolled, setScrolled] = useState(false);

    const handleScrolled = () => {

        const offset = window.scrollY
        if (offset > 200) { // Adjust the offset value as needed
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrolled);
        return () => {
            window.removeEventListener('scroll', handleScrolled);
        };
    }, []);



    return (

        <>

            <section className='main'>


                <Navbar fixed="top" className={scrolled ? 'shadow scrolled' : ''}>


                    <Navbar.Collapse id="basic-navbar-nav">


                        <Navbar.Brand href="#"><img src="/logo-2-removebg-preview.png" className='img-fluid' alt="" /></Navbar.Brand>


                        <Nav className="ml-auto hidden">


                            <Nav.Link href="#how" className={activeLink === 'how' ? 'active' : ''}>
                                How
                            </Nav.Link>


                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active' : ''}>
                                About
                            </Nav.Link>


                            <Nav.Link href="#services" className={activeLink === 'services' ? 'active' : ''}>
                                Services
                            </Nav.Link>


                            <Nav.Link href="#client" className={activeLink === 'clients' ? 'active' : ''}>
                                Clients
                            </Nav.Link>



                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active' : ''}>
                                Contact
                            </Nav.Link>


                        </Nav>


                        <div className='hidden socail-link'>

                            <a href="https://www.facebook.com/exmedia/" target='_blank' ><i class="fa-brands fa-facebook-f me-4"></i></a>
                            <a href="https://www.instagram.com/exmedia_1/" target='_blank'><i class="fa-brands fa-instagram me-4"></i></a>
                            <a href="https://x.com/exmedia_" target='_blank'  > <i class="fa-brands fa-x-twitter me-4"></i></a>
                            <a href="https://www.linkedin.com/company/exmedia1/posts/?feedView=all" target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>

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

                            <a href="#how" onClick={handleClose} className='nav-link off-nav'>How</a>
                            <a href="#about" onClick={handleClose} className='nav-link off-nav'>About</a>
                            <a href="#services" onClick={handleClose} className='nav-link off-nav'>Services</a>
                            <a href="#client" onClick={handleClose} className='nav-link off-nav'>Clients</a>
                            <a href="#contact" onClick={handleClose} className='nav-link off-nav'>Contact</a>



                        </div>


                    </Offcanvas.Body>


                </Offcanvas>



                {/* Hero */}
                <main className='w-100 hero' id='home'>


                    <Hero />


                </main>


                {/* How We Help You */}
                <div className='w-100 hero-2 p-2' >


                    <div id='how' className='mt-5 p-5 w-100'>

                        <HowWe />

                    </div>


                    <div id='about' className='mt-5 pt-5 w-100'>

                        <About />

                    </div>



                    <div id='services' className='mt-5 pt-5 w-100'>

                        <Services />

                    </div>


                    <div className='w-100 pt-5 mt-5' id='client'>

                        <Clients />


                    </div>

                    <div className='mt-5 p-5 w-100' id='contact'>

                        <Contact />

                    </div>



                </div>


            </section>



        </>

    )
}

export default Landing