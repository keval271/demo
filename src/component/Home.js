import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from './image/asset_30.jpeg';
import image1 from './image/asset_37.jpeg';




// React Icons
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFacebook,BsTwitter,BsPinterest,BsInstagram } from 'react-icons/bs';


// React Routing
import { Link } from "react-router-dom";

const Home = () => {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div>

      <Link exact to="/"> Home page</Link>
      <Link exact to="/tour"> Tour page</Link>
      <Link exact to="/destination"> Destination page</Link>
      <Link exact to="/pages"> Pages page</Link>
      <Link exact to="/blog"> Blog page</Link>
      <Link exact to="/contacts"> Contact page</Link>



      {/* Slider */}

      <Carousel class="slider owl-carousel owl-theme" id="slider" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div class="item"><img class="items" src={require('./image/asset 1.jpeg')} alt="" style={{ width: "100%" }} />
            <div class="container">
              <div class="slide">
                <div class="content">
                  <h1>Look & Feel <br />the World</h1>
                  <p>Phasellus sagittis sem eget sapien consequat, vitae porttitor <br /> felis feugiat. Nullam
                    suscipit condimentum hendrerit.</p>
                </div>
                <div class="nor_btn">
                  <button class="btns">Book My Tour <AiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="item"><img class="items" src={require('./image/asset 2.jpeg')} alt="" style={{ width: "100%" }} />
            <div class="container">
              <div class="slide">
                <div class="content">
                  <h1>Look & Feel <br />the World</h1>
                  <p>Phasellus sagittis sem eget sapien consequat, vitae porttitor <br /> felis feugiat. Nullam
                    suscipit condimentum hendrerit.</p>
                </div>
                <div class="nor_btn">
                  <button class="btns">Book My Tour<AiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div class="item"><img class="items" src={require('./image/asset 3.jpeg')} alt="" style={{ width: "100%" }} />
            <div class="container">
              <div class="slide">
                <div class="content">
                  <h1>Look & Feel <br />the World</h1>
                  <p>Phasellus sagittis sem eget sapien consequat, vitae porttitor <br /> felis feugiat. Nullam
                    suscipit condimentum hendrerit.</p>
                </div>
                <div class="nor_btn">
                  <button class="btns">Book My Tour<AiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>


      {/* Third page */}

      <section id="tour">
        <div className="container">
          <div className="row third_page">
            <div className=" title">
              <h5>Choose Youre</h5>
              <h1>Perfactly Holiday</h1>
            </div>
          </div>
          <div className="row first">
            <div className="col-xs-12 col-md-4">
              <div className="places">
                <img className="place" src="image/asset 4.png" alt="" width="80%" />
                <div className="pname">
                  <h3 className="spain">Spain</h3>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-md-4">
              <div className="places">
                <img className="place" src="image/asset 5.jpeg" alt="" width="100%" />
                <div className="pname">
                  <h4>Tarrangona</h4>
                  <h5>$1680</h5>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-md-4">
              <div className="places">
                <img className="place" src="image/asset 6.jpeg" alt="" width="100%" />
                <div className="pname">
                  <h4>Barcelone</h4>
                  <h5>$1780</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row second">
            <div className=" col-xs-12 col-md-4">
              <div className="places">
                <img className="place" src="image/asset 7.jpeg" alt="" width="100%" />
                <div className="pname">
                  <h4>Seminayak</h4>
                  <h5>$1980</h5>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-md-4">
              <div className="places">
                <img className="place" src="image/asset 8.jpeg" alt="" width="100%" />
                <div className="pname">
                  <h4>Denpasar</h4>
                  <h5>$2500</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="places last">
                <img className="place" src="image/asset 9.png" alt="" width="90%" />
                <div className="pname">
                  <h3>Bali</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Third page */}

      <section id="des">
        <div className="top_page">
          <div className="back_img" style={{ backgroundImage: 'url(' + image + ')' }}>
            <div className="top">
              <div className="top_txt">
                <h4>Go &amp; discover</h4>
                <h1>Breathtaking Cities</h1>
              </div>
              <div className="top_img">
                <img src="image/asset 31.jpeg" alt="" width="60%" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Four Page  */}

      <section>
        <div className="fourth_page">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 order-sm-last order-md-1 order-xs-last col-xs-12  col-md-6">
                <div className="left_img ">
                  <img src="image/asset 36.jpeg" alt="" width="100%" />
                </div>
              </div>
              <div className=" col-sm-12  order-sm-first order-md-2 order-xs-first col-xs-12  col-md-6">
                <div className="right_txt">
                  <h4>a few Words</h4>
                  <h1>About Us</h1>
                  <p>
                    Aliquam erat volutpat. Donec lobortis risus ut nunc ultrices, ut
                    bibendum nibh auctor. Fusce dolor purus, fringilla a felis sed,
                    gravida pellentesque sem. Etiam faucibus massa in fringilla
                    eleifend. In hac habitasse platea dictumst. Duis varius, metus
                    quis sodales mattis, massa dolor consequat urna, quis varius quam
                    mauris id ante. Vestibulum at dictum quam, nec elementum tortor.
                    Duis gravida feugiat ornare. Maecenas a urna in lacus pretium
                    tristique.
                  </p>
                  <button className="btnsa">
                    Read More
                    <i className="fa-solid fa-arrow-right aerrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mid Page */}
      <section>
        <div className="mid_page">
          <div className="bk_images" id="review">
            <img className="bac_img" src="" alt="" style={{ backgroundImage: 'url(' + image1 + ')' }} />
            <div className="top_rev container">
              <div className="revw ">
                <h4>Read the Top</h4>
                <h1>Latest Reviews</h1>
              </div>
            </div>
            <div className="row container scards">
              <div
                className="col-4 col-xs-12 col-sm-12  per_img firc"
                style={{ width: 530 }}
              >
                <img src="image/asset 16.jpeg" alt="" />
                <h4 className="name">Carl Moore</h4>
                <p>
                  Praesent vestibulum viverra libero in sollicitudin. Nulla ut nisl
                  tellus. Fusce et arcu ante. Donec tincidunt, metus quis lacinia
                  viverra, turpis justo tincidunt ipsum, blandit sollicitudin lorem
                  metus nec neque. Proin pretium lectus at tellus imperdiet gravida.
                  Suspendisse eget odio
                </p>
                <h4>*****</h4>
              </div>
              <div
                className="col-4 col-xs-12 col-sm-12  per_img secc"
                style={{ width: 530 }}
              >
                <img src="image/asset 17.jpeg" alt="" />
                <h4 className="name">Carl Moore</h4>
                <p>
                  Praesent vestibulum viverra libero in sollicitudin. Nulla ut nisl
                  tellus. Fusce et arcu ante. Donec tincidunt, metus quis lacinia
                  viverra, turpis justo tincidunt ipsum, blandit sollicitudin lorem
                  metus nec neque. Proin pretium lectus at tellus imperdiet gravida.
                  Suspendisse eget odio
                </p>
                <h4>*****</h4>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Five page */}

      <section>
        <div className="fifth_page">
          <div className="container">
            <div className="row cards">
              <div className="col-12  offer">
                <h4>Our trending</h4>
                <h1>Best Offers</h1>
                <p>
                  In hac habitasse platea dictumst. Duis varius, metus quis sodales
                  mattis, massa dolor consequat urna, quis varius quam mauris id ante.
                  Vestibulum at dictum quam, nec elementum tortor. Duis gravida
                  feugiat ornare. Maecenas a urna in lacus pretium tristique.
                </p>
              </div>
            </div>
            <div className="row ">
              <div
                className="carde  col-12 col-md-2  col-sm-12 "
                style={{ width: "18rem" }}
              >
                <img
                  src="image/asset 10.jpeg"
                  className="card-img-top"
                  alt=""
                  width="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">Eiffel Tower,France</h5>
                  <p className="card-text">
                    Click edit button to change this text. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.{" "}
                  </p>
                  <a href="#" className="btn off_btn">
                    Book Now
                  </a>
                </div>
              </div>
              <div
                className="carde  col-12 col-md-2 col-sm-12 "
                style={{ width: "18rem" }}
              >
                <img
                  src="image/asset 11.jpeg"
                  className="card-img-top"
                  alt=""
                  width="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">Swiss Alps,Switzerland</h5>
                  <p className="card-text">
                    Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                  </p>
                  <a href="#" className="btn off_btn">
                    Book Now
                  </a>
                </div>
              </div>
              <div
                className="carde  col-12 col-md-2 col-sm-12 "
                style={{ width: "18rem" }}
              >
                <img
                  src="image/asset 12.jpeg"
                  className="card-img-top"
                  alt=""
                  width="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">Rio de Janeiro,Brazil</h5>
                  <p className="card-text">
                    In mollis euismod risus, non tincidunt tortor accumsan
                    et.Phasellus interdum nunc in mauris efficitur.
                  </p>
                  <a href="#" className="btn off_btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="row cards ">
              <div
                className="card  col-12 col-md-2 col-sm-12 "
                style={{ width: "18rem" }}
              >
                <img
                  src="image/asset 13.jpeg"
                  className="card-img-top"
                  alt=""
                  width="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">Valencia,Spain</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Click
                    edit button to change this text.{" "}
                  </p>
                  <a href="#" className="btn off_btn">
                    Book Now
                  </a>
                </div>
              </div>
              <div
                className="card  col-12 col-md-2 col-sm-12 "
                style={{ width: "18rem" }}
              >
                <img
                  src="image/asset 14.png"
                  className="card-img-top"
                  alt=""
                  width="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">Varadero,USA</h5>
                  <p className="card-text">
                    Duis sit amet eros id justo fringilla maximus. Sed vehicula
                    eleifend posuere. Aliquam erat volutpat. Duis ante nisi.
                  </p>
                  <a href="#" className="btn off_btn">
                    Book Now
                  </a>
                </div>
              </div>
              <div
                className="card  col-12 col-md-2 col-sm-12 "
                style={{ width: "18rem" }}
              >
                <img
                  src="image/asset 15.jpeg"
                  className="card-img-top"
                  alt=""
                  width="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">italy</h5>
                  <p className="card-text">
                    In mollis euismod risus, non tincidunt tortor accumsan
                    et.Phasellus interdum nunc in mauris efficitur
                  </p>
                  <a href="#" className="btn off_btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Seven Page */}
      <section>
        <div class="seven_page ">
          <div class="col-auto photo">
            <img class="bk_image" src="image/asset 41.jpeg" alt="" width="100%" />

            <div class="container">
              <div class="col-auto book">
                <h4>We Are Best</h4>
                <h1>Why Booking <br /> With Us?</h1>
                <p>
                  Aenean vel quam elementum, ultricies ex sed, bibendum arcu. Donec a tortor ac dolor
                  commodo
                  commodo
                  vel non lectus. Nullam tincidunt massa tincidunt libero mattis ornare.
                </p>
                <h3 class="icon"><AiOutlineArrowRight/>All placges and activiates are carefully
                  picked by us.</h3>
                <h3 class="icon"><AiOutlineArrowRight/>Best price guaranteee & Hassle free!
                </h3>
                <h3 class="icon"><AiOutlineArrowRight/>We are an award winning agency</h3>
                <h3 class="icon"><AiOutlineArrowRight/>Trusted by more than 80,000 customers</h3>
                <button class="btnsb">Read More<AiOutlineArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Eight Page */}
      <section>
        <div className="eight_page">
          <div className="container">
            <div className="row">
              <div className="col tour_txt">
                <h4>Our Most</h4>
                <h1>Pop Tours</h1>
              </div>
            </div>
            <div className="row tours">
              <div className="col-xs-12 col-sm-12 col-md-3">
                <img src="image/asset 7.jpeg" alt="" width="100%" />
                <h3>Maldives</h3>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3">
                <img src="image/asset 22.jpeg" alt="" width="100%" />
                <h3>England</h3>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3">
                <img src="image/asset 23.jpeg" alt="" width="100%" />
                <h3>Italy</h3>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3">
                <img src="image/asset 24.jpeg" alt="" width="100%" />
                <h3>Turkey</h3>
              </div>
            </div>
            <button className="btnt">
              View All Tours
              <i className="fa-solid fa-arrow-right aerrowt" />
            </button>
          </div>
        </div>
      </section>


      <footer>
        <div className="nine_page">
          <div className="bk_footer">
            <img className="footer" src="image/asset 42.jpeg" alt="" width="100%" />
            <div className="row ">
              <div className="col logof">
                <img src="image/asset 0.svg" alt="" width="13%" />
              </div>
            </div>
            <div className="row info container">
              <div className="col-xs-12 col-sm-12 col-md-4   contacts">
                <ul>
                  <h4>CONTACT INFO</h4>
                </ul>
                <ul className="contact">
                  <li>London</li>
                  <i className="fa-solid fa-phone" />
                  <h5>+6-63324-665464</h5>
                </ul>
                <ul className="contact">
                  <li>New York</li>
                  <i className="fa-solid fa-phone" />
                  <h5>+6-63324-665464</h5>
                </ul>
                <ul className="contact">
                  <li>Tokyo</li>
                  <i className="fa-solid fa-phone" />
                  <h5>+6-63324-665464</h5>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-5 col-md-4    abouts ">
                <h4>ABOUT US</h4>
                <h5>Our Story</h5>
                <h5>Travel Blog &amp; Tips</h5>
                <h5>Working With Us</h5>
                <h5>Be Our partner</h5>
              </div>
              <div className="col col-xs-12 col-sm-5 col-md-4   supports">
                <h4>SUPPORT</h4>
                <h5>Customer Support</h5>
                <h5>Privacy &amp; Policy</h5>
                <h5>Contact Channels</h5>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4    safe">
                <h4>PAY SAFELY WITH US</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="row container">
              <div className="col-xs-12 copy_right">
                <h5>Copyright © 2022 Travo by MR Keval. All Rights Reserved.</h5>
              </div>
            </div>
            <div className="soc_ico" >
                  <BsFacebook/>
                  <BsTwitter/>
                  <BsPinterest/>
                  <BsInstagram/>
            </div>
          </div>
        </div>
      </footer>


    </div >

  )
}

export default Home;