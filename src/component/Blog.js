import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';


const Blog = () => {
  return (
    <div>
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
                <h3 class="icon"><AiOutlineArrowRight />All placges and activiates are carefully
                  picked by us.</h3>
                <h3 class="icon"><AiOutlineArrowRight />Best price guaranteee & Hassle free!
                </h3>
                <h3 class="icon"><AiOutlineArrowRight />We are an award winning agency</h3>
                <h3 class="icon"><AiOutlineArrowRight />Trusted by more than 80,000 customers</h3>
                <button class="btnsb">Read More<AiOutlineArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog;