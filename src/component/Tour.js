import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const Tour = () => {

  const tour = {
    marginTop: "100px"
  }


  return (
    <div>

      <section id="tour" style={tour}>
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
    </div >
  )
}

export default Tour;