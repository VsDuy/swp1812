import React from "react";
import { Carousel } from "react-bootstrap";

export default function Banner() {
  return (
    <Carousel id="carouselExampleCaptions">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as2.ftcdn.net/v2/jpg/04/61/79/83/1000_F_461798363_HvcpAl6SidTqBHgrW7oUQwtL34pGb2tR.jpg"
          alt="anh1"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/minimal-charity-event-dynamic-twitter-header_23-2149399775.jpg"
          alt="anh2"
        />
       
      </Carousel.Item>
      
    </Carousel>
  );
}