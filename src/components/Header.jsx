import React from "react";

export default function Header() {
  return (
    <div className="container-fluid border-bottom border-warning">
      <div className="row ">
        <div
          className="col-12 gap-5  d-flex justify-content-center justify-content-md-end align-middle mb-2 pt-5"
          style={{ paddingRight: "10%" }}
        >
          <a href="#" className="text-white text-decoration-none ">
            Home
          </a>
          <a href="#" className="text-white text-decoration-none">
            About
          </a>
          <a href="#" className="text-white text-decoration-none">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
