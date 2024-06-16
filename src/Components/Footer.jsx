import React from "react";

function Footer() {
  return (
    <>
      <div className="row gx-5 gy-2">
        <div
          className="col-md-4 col-lg-4 col-sm-4 col-4   mb-3 rounded "
          // style={{ width: "150px", marginLeft: "50px" }}
        >
          <h6>Address</h6>
          <a class=" text-white text-decoration-none" href="">
            <p className="" style={{ fontSize: "15px" }}>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: 044-45614700
            </p>
          </a>
        </div>

        <div
          className="col-md- col-lg-4 col-sm-4 col-4   mb-3 rounded "
          // style={{ width: "150px", marginLeft: "50px" }}
        >
          <h6>Cstomer Policy</h6>
          <ul className="list-unstyled">
            <li>
              <a
                class=" text-white text-decoration-none"
                style={{ fontSize: "15px" }}
                href=""
              >
                Term Of Use
              </a>
            </li>
            <li>
              <a
                class=" text-white text-decoration-none "
                style={{ fontSize: "15px" }}
                href=""
              >
                Security
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-md- col-lg-4 col-sm-4 col-4   mb-3 rounded "
          // style={{ width: "150px", marginLeft: "50px" }}
        >
          <h6>Help</h6>
          <ul className="list-unstyled">
            <li>
              <a
                class=" text-white text-decoration-none"
                style={{ fontSize: "15px" }}
                href=""
              >
                Payment
              </a>
            </li>
            <li>
              <a
                class=" text-white text-decoration-none "
                style={{ fontSize: "15px" }}
                href=""
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                class=" text-white text-decoration-none "
                style={{ fontSize: "15px" }}
                href=""
              >
                Cancellation & Return
              </a>
            </li>
            <li>
              <a
                class=" text-white text-decoration-none "
                style={{ fontSize: "15px" }}
                href=""
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                class=" text-white text-decoration-none "
                style={{ fontSize: "15px" }}
                href=""
              >
                Report Infringmrnt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
