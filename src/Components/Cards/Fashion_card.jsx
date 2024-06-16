import React from "react";
import Fashion_card_data from "../Cards_data/Fashion_card_data";
function Fashion_card() {
  return (
    <>
      <div className="container-fluid">
        <div className="row gx-5 gy-2">
          {Fashion_card_data.map((data) => {
            return (
              <div
                className="col-md-3 col-lg-2 col-sm-3 col-4 shadow-sm mb-3 rounded "
                // style={{ width: "150px", marginLeft: "50px" }}
              >
                <a class=" text-dark text-decoration-none" href="">
                  <img
                    src={data.image}
                    class="img-fluid  "
                    style={{ height: "90px", width: "90px" }}
                    alt=""
                    srcset=""
                  />
                  <p className="fw-bold mt-1" style={{ fontSize: "13px" }}>
                    {" "}
                    {data.cat_name}
                  </p>
                  <p className="fw-bold mt-1">25000</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Fashion_card;
