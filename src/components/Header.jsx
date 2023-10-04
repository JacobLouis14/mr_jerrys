import React from "react";

export default function Header() {
  return (
    <div className="container-fluid border-bottom border-warning border-opacity-25">
      <div className="row ">
        <div
          className="col-12 gap-5  d-flex justify-content-center justify-content-md-end align-middle mb-4 pt-4"
          style={{ paddingRight: "10%" }}
        >
          <a
            href="#"
            className="text-white text-decoration-none fs-5"
            style={{ fontFamily: "Italiana" }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-decoration-none fs-5"
            style={{ fontFamily: "Italiana" }}
          >
            About
          </a>
          <a
            href="#"
            className="text-white text-decoration-none fs-5"
            style={{ fontFamily: "Italiana" }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
