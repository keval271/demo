import React from 'react'
import image1 from './image/asset_37.jpeg';


const Pages = () => {
  return (
    <div>
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

    </div>
  )
}

export default Pages;