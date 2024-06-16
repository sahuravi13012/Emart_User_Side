import React from "react";
import "./Electronic.css";
import { ArrowRightOutlined } from "@ant-design/icons";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ marginRight: "50px" }}
    >
      <button
        className="next-btn-arrow"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#f6f9fc",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      >
        <ArrowRightOutlined style={{ fontSize: "20px" }} />
      </button>
    </div>
  );
}

export default NextArrow;
