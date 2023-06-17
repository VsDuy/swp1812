import React from "react";
import { Carousel } from "react-bootstrap";

export default function Banner() {
  return (
    <Carousel id="carouselExampleCaptions">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/minimal-charity-event-dynamic-twitch-banner_23-2149399779.jpg"
          alt="anh1"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/minimal-charity-event-twitter-header_23-2149396180.jpg"
          alt="anh2"
        />
       
      </Carousel.Item>
      
    </Carousel>
  );
}