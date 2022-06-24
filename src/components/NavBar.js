import React from "react";
import { Container, Navbar, ButtonGroup } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="https://cdn.planetradio.co.uk/one/media/5f6c/670b/89a5/4030/4c38/9f27/harry-styles-hat-trick-reaction.jpg"
            width="60"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          WILD FOR STYLES: A Harry Styles Fansite
        </Navbar.Brand>
        <ButtonGroup>
          <button className="leighButton">
            {" "}
            <a target="_blank" href="https://www.hstyles.co.uk/">
              BUY TICKETS{" "}
            </a>
          </button>
          <button className="leighButton">
            {" "}
            <a target="_blank" href="https://shopus.hstyles.co.uk/">
              BUY MERCH
            </a>
          </button>
          <button className="leighButton">
            <a target="_blank" href="https://hstyles.lnk.to/youtube">
              CONCERT FOOTAGE
            </a>
          </button>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
}

export default NavBar;
