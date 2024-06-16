import React from "react";
import "./Header.css";
import Login from "../Auth/Login";
import { CloseOutlined } from "@ant-design/icons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DehazeIcon from "@mui/icons-material/Dehaze";
import logo from "../image/logo.png";
import { Badge, Input, Avatar } from "antd";

const { Search } = Input;

function Header() {
  return (
    <>
      <header>
        <div class="container-fluid ">
          <div class="navb-logo mt-2">
            {/* <span><h3>e</h3>mart</span> */}
            <Avatar
              size={30}
              className=" mb-1 d-sm-none d-block d-lg-none d-md-none d-xl-none"
              src={logo}
            />
            <h3 className="heading d-sm-block d-none d-lg-block d-md-block d-xl-block">
              <span className="text-white fw-6">E-mart</span>
            </h3>
          </div>
          <Search
            className="d-sm-block d-md-block mx-5 d-none"
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            style={{ width: 300, marginLeft: "50px" }}
          />

          <Search
            className="d-sm-none d-block d-lg-none d-md-none d-xl-none "
            placeholder="input search text "
            onSearch={(value) => console.log(value)}
            style={{ width: 200 }}
          />

          {/* <form class="d-flex">
            <input
              class="form-control ms-2"
              type="search"
              size={small}
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              <SearchIcon />
            </button>
          </form> */}

          <div class="navb-items text-white d-none d-xl-flex">
            <div class="item">
              <a href="/">Home</a>
            </div>

            <div class="item">
              <a href="/services">Services</a>
            </div>

            <div class="item ">
              <Badge count={5}>
                <ShoppingCartIcon />
                {/* <a href="#" className="head-example" /> */}
              </Badge>
            </div>

            <Login />
          </div>

          <div class="mobile-toggler d-xl-none">
            <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
              {/* <i class="fa-solid fa-bars"></i> */}
              <DehazeIcon style={{ fontSize: "2rem" }} />
            </a>
          </div>

          <div
            class="modal fade"
            id="navbModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <img src="/img/logo-variant.png" alt="Logo" />
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <CloseOutlined style={{ fontSize: "2rem" }} />
                  </button>
                </div>

                <div class="modal-body">
                  <div class="modal-line">
                    <i class="fa-solid fa-house"></i>
                    <a href="/">Home</a>
                  </div>

                  <div class="modal-line">
                    <i class="fa-solid fa-bell-concierge"></i>
                    <a href="/services">Services</a>
                  </div>

                  <div class="modal-line">
                    <i class="fa-solid fa-file-lines"></i>
                    <a href="/cases">Cases</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
