import React from "react";
import { FaFilePdf } from "react-icons/fa6";

const ProductListButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1aiOLNgKaWKNGT6l5nhyF-ey4QntFZdyE/view?usp=drive_link" // <-- Replace with your Drive link
      target="_blank"
      rel="noopener noreferrer"
      className="d-flex align-items-center justify-content-center text-white fw-bold"
      style={{
        position: "fixed",
        top: "70%",
        right: 0,
        backgroundColor: "#7EA63F",
        padding: "10px 8px",
        borderRadius: "6px 0 0 6px",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        fontSize: "13px",
        zIndex: 9999,
        transition: "0.3s",
        textDecoration: "none",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0D542B")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#7EA63F")}
    >
      <FaFilePdf />
&nbsp;
      Product List
    </a>
  );
};

export default ProductListButton;
