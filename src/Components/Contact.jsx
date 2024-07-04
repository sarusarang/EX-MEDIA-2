import React from 'react'
import './Contact.css'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);


    return (



        <>


            <section className=' container d-flex flex-column'>

                <div className='d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="1000">

                    <h1 className='mb-3'>Conatct Us</h1>

                    <div className='line' style={{ width: '3%' }}></div>


                    <p className='text-center mt-3'>We can shape Your brand <br /> story
                        & identities With impact
                    </p>

                </div>


                <div className='d-flex justify-content-around align-items-center mt-5'>

                    <div className='contact-icon' data-aos="fade-up" data-aos-duration="1000">

                        <i class="fa-solid fa-location-dot"></i>
                        <h4 className='text-center'>Our presence</h4>
                        <p className='text-center'>KERALA – UAE </p>

                    </div>

                    <div className='contact-icon' data-aos="fade-up" data-aos-duration="1000">

                        <i class="fa-solid fa-phone"></i>
                        <h4 className='text-center'>To start a conversation</h4>
                        <a href="https://wa.me/9526123466" target='_blank' className='btn-chat'>+919526123466 </a>

                    </div>


                    <div className='contact-icon' data-aos="fade-up" data-aos-duration="1000">

                        <i class="fa-solid fa-envelope"></i>
                        <h4 className='text-center'>Email Us</h4>
                        <a href="mailto:info@exmedia.in" target='_blank' className='btn-chat'>info@exmedia.in</a>

                    </div>




                </div>

                <p data-aos="fade-up" data-aos-duration="1000" className='text-center mt-5 mb-5'>© COPYRIGHT 2024 EXMEDIA</p>


            </section>

        </>





    )





}

export default Contact