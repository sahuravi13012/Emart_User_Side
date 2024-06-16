import React from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import Cards from "../Components/Cards/Cards";
import Electronic_cards from "../Components/Cards/Electronic_cards";
import Fashion_card from "../Components/Cards/Fashion_card";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid" >
        <div className="row">
          <div className="col-lg-12 mt-2">
            <Cards />
          </div>
          <div className="row">
            <div className="col-lg-12 mt-2 mx-2">
              <Slider />
            </div>
          </div>
          <div className="row py-5 ">
            <div className="col-lg-12 mt-2">
              <h1 className="mx-5 fs-3 fw-bolder ">Best Of Electronics</h1>
              <Electronic_cards />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-2">
              <h1 className="text-center">Fashion Product</h1>
              <Fashion_card />
            </div>
          </div>
          <div className="row bg-primary">
            <div className="col-lg-12 mt-2">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
