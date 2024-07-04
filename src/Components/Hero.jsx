import React from 'react'
import { useEffect } from 'react';
import './Hero.css'
import 'animate.css'


function Hero() {


   



    return (


        <section className='w-100 Hero-img '>

            <div className='hero-text mt-5 animate__animated animate__fadeInLeft'  >

                <div className='line mb-3'></div>

                <h1 className='mb-2 animate__animated animate__fadeInLeft animate__delay-0.8s ' >THINK</h1>


                <h1 className='ms-5 mb-2 animate__animated animate__zoomInDown animate__delay-0.8s ' >BEYOND</h1>


                <h1 className='animate__animated animate__fadeInLeft animate__delay-0.9s'>THE ADS</h1>

                <p className='mb-3' >We are driving brand success
                    through innovation, <br /> creativity,
                    and strategic excellence.
                </p>

                <div className='line'></div>


            </div>


        </section>


    )



}

export default Hero