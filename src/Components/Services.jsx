import React from 'react'
import './Services.css'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import AOS from "aos";
import "aos/dist/aos.css";



function Services() {

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

        <div className='d-flex justify-content-center flex-column align-items-center' data-aos="fade-up" data-aos-duration="1000">

          <h1 className='mb-3'>OUR SERVICE</h1>

          <div className='line mb-5' style={{ width: '5%' }}></div>


        </div>



        <div className='row'>



          <div className='col-md-4 card-flex mt-card' data-aos="zoom-in" data-aos-duration="1000">

            <Card  className='shadow'>

              <i class="fa-solid fa-bolt-lightning thunder"></i>


              <Card.Body>

                <Card.Title>Branding</Card.Title>


                <Card.Text>
                  We will create a unique identity for a product or service, encompassing its name, logo, design, and overall image. Effective
                  branding differentiates the product in the market, builds customer loyalty, and communicates the values and qualities that
                  make the product or service desirable.
                </Card.Text>

              </Card.Body>


            </Card>

          </div>



          <div className='col-md-4 card-flex mt-card' data-aos="zoom-in" data-aos-duration="1000">

            <Card  className='shadow'>

              <i class="fa-solid fa-pen-nib thunder"></i>


              <Card.Body>

                <Card.Title>Graphics</Card.Title>


                <Card.Text className=' graphics'>
                  Our graphics help brands grow by creating visually appealing and professional designs that capture attention and engage
                  audiences. High-quality graphics enhance brand recognition, convey key messages effectively, and differentiate brands
                  from competitors.
                </Card.Text>

              </Card.Body>


            </Card>

          </div>



          <div className='col-md-4 card-flex mt-card' data-aos="zoom-in" data-aos-duration="1000">

            <Card  className='shadow'>

            <i class="fa-solid fa-briefcase thunder"></i>


              <Card.Body>

                <Card.Title> Business Strategy Development
                </Card.Title>


                <Card.Text style={{paddingBottom:'4.5rem'}}>
                 
                  We Can formulate comprehensive plans that define a company's goals, tactics, and direction, guiding decisions to achieve
                  sustainable growth and competitive advantage
                </Card.Text>

              </Card.Body>


            </Card>

          </div>




          <div className='col-md-4 mt-5 card-flex' data-aos="zoom-in" data-aos-duration="1000">

            <Card  className='shadow'>

              <i class="fa-solid fa-bullhorn thunder"></i>


              <Card.Body>

                <Card.Title>Digital Marketing
                </Card.Title>


                <Card.Text className='pb-5'>
                  We can maximize any business and online presence with Digital marketing through strategic campaigns according to the
                  nature of the business and its goal across platforms. It includes SEO, social media, content, and analytics to reach, engage,
                  and convert target audiences effectively.
                </Card.Text>

              </Card.Body>


            </Card>

          </div>


          <div className='col-md-4 mt-5 card-flex' data-aos="zoom-in" data-aos-duration="1000">

            <Card  className='shadow'>

              <i class="fa-solid fa-satellite-dish thunder"></i>


              <Card.Body>

                <Card.Title>Satellite Media
                </Card.Title>


                <Card.Text className='pb-4'>
                  Our satellite media services expand business reach by delivering content via satellite. This ensures reliable, high-quality
                  broadcasts, enhancing global visibility and engagement. Effective satellite media releases can drive brand awareness,
                  customer acquisition, and market expansion, fostering business growth.

                </Card.Text>

              </Card.Body>


            </Card>

          </div>




          <div className='col-md-4 mt-5 card-flex' data-aos="zoom-in" data-aos-duration="1000">

            <Card className='shadow'>

              <i class="fa-solid fa-magnifying-glass thunder"></i>


              <Card.Body>

                <Card.Title>Market research and analytics

                </Card.Title>


                <Card.Text  className='market'>
                  exmedia will do Market research and analytics involving collecting, analyzing, and interpreting data to gain insights into
                  consumer behaviors and market trends, aiding informed business decisions and strategy refinement.
                </Card.Text>

              </Card.Body>


            </Card>

          </div>




        </div>


      </section>

    </>



  )



}

export default Services