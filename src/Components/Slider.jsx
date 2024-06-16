import React from "react";
import { Carousel } from "antd";
// import "./Slider.css";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Slider() {
  const image1 =
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/07ab097e1ede5d0e.jpg?q=50";
  const image2 =
    "https://rukminim1.flixcart.com/flap/50/50/image/75a15c3e19c3f7de.jpg?q=50";
  const image3 =
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/6315d99327381491.jpg?q=50";
const image4 = "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/f827f8054dbd984a.jpg?q=50"
  return (
    <>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={image1} class="d-block w-100" alt="..."/>
                  
                </div>
                <div class="carousel-item">
                  <img src={image2} class="d-block w-100" alt="..."/>
                  
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..."/>
                  Slider slider
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      
      <Carousel autoplay className="carousel">
        <div>
          <img src={image1} class="d-block w-100" alt="..." />
        </div>
        <div>
          <img src={image2} class="d-block w-100" alt="..." />
        </div>
        <div>
          <img src={image3} class="d-block w-100" alt="..." />
        </div>
        <div>
          <img src={image4} class="d-block w-100" alt="..." />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
