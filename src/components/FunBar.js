import React from "react";
import { Carousel } from "react-bootstrap";

function FunBar() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/concert1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Purchase Tickets</h3>
          <a href="https://www.hstyles.co.uk/">Harry Styles Official Website</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/concert2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Concert Footage</h3>
          <a href="https://hstyles.lnk.to/youtube">Harry Styles' YouTube Channel</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/concert3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Wild For Styles</h3>
          <p>
            I became a Harry Styles fan in June 2013, after the premiere of the One Direction music video for "Best Song Ever". Since then, my life has not known peace. I have followed Harry from his career in the band, to his solo stardom, and am always trying to evangelize those close to me into the church of Styles.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FunBar;
