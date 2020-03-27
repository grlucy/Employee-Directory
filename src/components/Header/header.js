import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <header className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col text-center text-white py-5">
              <h1 className="mb-4">
                <i className="fas fa-globe"></i> &nbsp;ExoGeni Corporation
              </h1>
              <h3>Employee Directory</h3>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
