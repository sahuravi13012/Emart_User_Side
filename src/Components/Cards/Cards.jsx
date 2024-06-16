import React from "react";
import { Card } from "antd";
import cardData from "../Cards_data/Cards_data";
// import cardData from "./Cards_data";

const { Meta } = Card;
function Cards() {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="row gx-5 gy-2">
        {cardData.map((data) => {
          return (
            <div
              className="col-md-2 col-lg-2 col-sm-2 col-4 shadow-2  mb-3 rounded  "
              // style={{ width: "100px" }}
            >
              <a class=" text-dark  text-decoration-none" href="" style={{ width: "100px",marginLeft:"20px" }} >
                <img
                  src={data.image}
                  class="img-fluid"
                  style={{ height: "64px" }}
                  alt=""
                  srcset=""
                />

                <p className="fw-bold" style={{ fontSize: "13px",marginLeft:"30px" }}>
                  {data.cat_name}
                </p>
              </a>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
}

export default Cards;
