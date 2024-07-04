import React from 'react'
import './Clients.css'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

function Clients() {


    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);


    return (



        <>


            <section className='container mt-5 p-5'>

                <div className='row'>


                    <div className='col-md-5 client-text me-5' data-aos="fade-right" data-aos-duration="1000">

                        <h6>TRUST</h6>

                        <h1 className='mb-4' data-aos="fade-up" data-aos-duration="1000">Companies who use <br /> our services</h1>

                        <div className='line mb-4' style={{ width: '6%' }}></div>

                        <p data-aos="fade-up" data-aos-duration="1000">At ExMedia, we are proud to serve a diverse range of clients across various industries. Our comprehensive suite of services has empowered startups, small businesses,
                            and large corporations to achieve their digital goals and streamline their operations. From innovative tech firms and creative agencies to e-commerce platforms
                            and healthcare providers, our expertise has consistently driven success and growth. </p>

                        <p >— Our Client</p>

                    </div>


                    <div className='row col-md-6 image-client' data-aos="fade-left" data-aos-duration="1000">

                        <div className='col-md-4 client-card'>

                            <div className='hover-card '>

                                <h5 className='text-center text-white'>Advice Cycle</h5>

                            </div>

                            <img src="https://png.pngtree.com/element_our/sm/20180415/sm_5ad34449bac27.jpg" className='img-fluid' alt="" />

                        </div>


                        <div className='col-md-4 client-card'>

                            <div className='hover-card '>

                                <h5 className='text-center text-white'>Traveler</h5>

                            </div>

                            <img src="https://png.pngtree.com/template/20191030/ourmid/pngtree-travel-logo-airplane-design-airplane-tickets-travel-agencies-image_325199.jpg" className='img-fluid' alt="" />

                        </div>


                        <div className='col-md-4 client-card'>

                            <div className='hover-card '>

                                <h5 className='text-center text-white'>Operify</h5>

                            </div>

                            <img src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" className='img-fluid' alt="" />

                        </div>


                        <div className='col-md-4 client-card'>

                            <div className='hover-card '>

                                <h5 className='text-center text-white'>Salesdome</h5>

                            </div>

                            <img src="https://img.freepik.com/premium-vector/360-36-logo-design_594430-154.jpg?w=360" className='img-fluid' alt="" />

                        </div>


                        <div className='col-md-4 client-card'>

                            <div className='hover-card '>

                                <h5 className='text-center text-white'>Hatchdrive</h5>

                            </div>

                            <img src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" className='img-fluid' alt="" />

                        </div>


                        <div className='col-md-4 client-card'>

                            <div className='hover-card '>

                                <h5 className='text-center text-white'>Bizmogul</h5>

                            </div>

                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305" className='img-fluid' alt="" />

                        </div>


                    </div>

                </div>


            </section>

        </>





    )




}

export default Clients