import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./Electronic.css";
import { colors } from "@mui/material";
function PreviosArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ marginLeft: "20px" }}
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
        <ArrowLeftOutlined style={{ fontSize: "20px"}} />
      </button>
    </div>
  );
}

export default PreviosArrow;
