import React from "react";
import { Carousel } from "react-bootstrap";

function FunBar() {
  return (
    <Carousel className="leighCarousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/concert1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>
            "The One Direction member's solo debut pays fine tribute to classic
            rock'n'roll and shows off his exceptional voice, if not his
            enigmatic persona."
          </h2>
          <br></br>
          <h3>Pitchfork</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/concert2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>
            "Harry Styles Is a Rock God and a Gentleman on <em>Fine Line</em>"
          </h2>
          <br></br>
          <h3>Rolling Stone Mag</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/concert3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>
            "Harry Styles Is Still a Dreamy Cipher on His Third LP,{" "}
            <em>Harry's House</em>"
          </h2>
          <br></br>
          <h3>The New York Times</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FunBar;
