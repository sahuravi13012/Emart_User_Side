import React from "react";
import "./Electronic.css";
import NextArrow from "./NextArrow";
import PreviosArrow from "./PreviosArrow";
import Electronic_card_data from "../Cards_data/Electronic_card_data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Electronic_cards() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviosArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-fluid mt-3">
      <div className="row gx-5 gy-2 ">
        <Slider {...settings} className="mx-2">
          {Electronic_card_data.map((data) => {
            return (
              <div className="card  shadow  mb-3 mx-4 rounded-3 h-100 w-75 ">
                <span className="discount">{data.discount}% Off</span>
                <img
                  src={data.image}
                  class="card-img-top mx-auto"
                  style={{ height: "120px", width: "110px" }}
                  alt="..."
                />
                <div class="card-body fw-bold mt-5 " style={{ color: "red" }}>
                  <span style={{ color: "#000" }}>{data.cat_name}</span>
                  <br />
                  {data.rateing}
                  <br />${data.price}
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm fs-8"
                    style={{ marginLeft: "110px" }}
                    href="#"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Electronic_cards;
