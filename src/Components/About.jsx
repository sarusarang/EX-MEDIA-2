import React, { useState } from 'react'
import { useEffect } from 'react';
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";




function About() {


    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    

    


    return (


        <>

            <section className='container mt-5'>

                <div className='row justify-content-center'>

                    <div className='col-md-4 review' data-aos="fade-up" data-aos-duration="1000">

                        <p data-aos="fade-up" data-aos-duration="1000">Very professional and dedicated to customer satisfaction that goes above and beyond. Team ‘xmedia’
                            gives attention to detail of the customers wants and needs, also it has an excellent team that ensures
                            project completion well in time. I am very much pleased for the job well done. Thank you very much.</p>

                        <p data-aos="fade-up" data-aos-duration="1000" className='text-end'>— Raj Sharma  Customer</p>

                    </div>


                    <div className='col-md-4 we-ex' data-aos="fade-up" data-aos-duration="1000">

                        <h6 className='mb-3'>Who are we</h6>

                        <h2 className='mb-3'>THE EXMEDIA</h2>

                        <div className='line mb-4' style={{ width: '7%' }}></div>

                        <p data-aos="fade-up" data-aos-duration="1000">Exmedia is well-experienced and successful company in the segment of branding and advertising for
                            17 years. We have transformed the business ideas of about 1000+ valuable clients to position their
                            brands in respective environments, We have enabled them to compete with anyone and capture
                            maximum business volume. </p>

                        <p data-aos="fade-up" data-aos-duration="1000">Exmedia has been a trailblazing Branding & an Advertisement company, driving brand success through
                            innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to
                            deliver impactful campaigns that transcend conventional boundaries.</p>


                        <p data-aos="fade-up" data-aos-duration="1000">With a
                            deep understanding of market dynamics, consumer behavior, and emerging trends, exmedia is your
                            compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the
                            forefront of industry innovation.</p>

                      

                        <a href='https://www.youtube.com/@exmedia-/videos' target='_blank'  className='btn-play btn'>Watch Us <i class="fa-solid fa-play"></i></a>





                    </div>


                    <div className='col-md-4 ex-image' data-aos="fade-up" data-aos-duration="1000">

                        <img src="/dancer.jpg" className='img-fluid' alt="image" />

                    </div>

                </div>





            </section>

        </>




    )




}

export default About