import React from 'react'
import { useEffect } from 'react';
import './How.css'
import AOS from "aos";
import "aos/dist/aos.css";

function HowWe() {



  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);


  return (





    <>


      <section className='w-100 container mt-5'>


        <div className='row pt-5'>


          <div className='col-md-6 how-text' data-aos="fade-right" data-aos-duration="1000">

            <p className='mb-0' style={{ fontWeight: '700', fontSize: 'medium', color: '#a4a4a4' }}>SUCCESS  </p>

            <h2>How We Help You
              For Brand <br /> Positioning
              & Empower the Business</h2>

            <div className='line' style={{ width: '5%' }}></div>

            <p className='unlock'>Unlock untapped potential and
              accelerate business with tailored
              strategies, Dominate the market
              and leave competitors
              in the dust.
            </p>

          </div>


          <div className='row col-md-6' data-aos="fade-left" data-aos-duration="1000">

            <div className='col-md-6 brand' data-aos="fade-up" data-aos-duration="1000">

              <i class="fa-solid fa-bolt-lightning  fa-bounce"></i>

              <h4>Branding strategies</h4>

              <p data-aos="fade-up" data-aos-duration="1000">Identities come to life, our expertise lies in shaping brands that resonate deeply and endure. With a keen
                understanding of market dynamics, we craft strategic brand identities that leave lasting imprints.</p>

            </div>

            <div className='col-md-6 brand' data-aos="fade-up" data-aos-duration="1000">

              <i class="fa-solid fa-camera fa-bounce"></i>

              <h4> Productphotography & video</h4>

              <p data-aos="fade-up" data-aos-duration="1000">We Craft Captivating Visuals, In Photography or Videography, We Transform Concepts Into
                Breathtaking Realities That Leave Lasting Impressions & Deliver each frame and note with excellence.</p>

            </div>



            <div className='col-md-6 brand ' data-aos="fade-up" data-aos-duration="1000">

            <i class="fa-solid fa-code fa-bounce"></i>

              <h4>Al Web, Mobile App</h4>

              <p data-aos="fade-up" data-aos-duration="1000">Delivering services harness the power of AI to deliver customized, efficient, and user-friendly digital solutions,
                which will help the rapid growth of businesses and operational productivity with transformative technology.
              </p>

            </div>


            <div className='col-md-6 brand' data-aos="fade-up" data-aos-duration="1000">

            <i class="fa-solid fa-hashtag fa-bounce"></i>

              <h4>Social media </h4>

              <p data-aos="fade-up" data-aos-duration="1000">Embrace digital transformation, reach global audiences, and drive growth effortlessly. Enhance customer
                engagement, streamline operations, and stay ahead of the competition. 
              </p>

            </div>


          </div>


        </div>



      </section>


    </>



  )




}

export default HowWe