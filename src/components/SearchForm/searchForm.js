import React from "react";

function SearchForm(props) {
  return (
    <>
      <h4 className="d-block text-center d-md-inline-block text-md-left mr-md-5 pt-2">
        Search:
      </h4>
      <div className="text-center text-md-left d-inline-block">
        <form className="form-inline text-center text-md-left">
          <input
            type="text"
            className="form-control mt-3 mt-sm-0"
            placeholder="Last name"
          />
          <button
            type="submit"
            className="btn btn-primary ml-sm-3 mt-3 mt-sm-0 text-white"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;
