import React from "react";
import Employees from "../../employees.json";
import SearchResults from "../SearchResults/searchResults";
import SearchForm from "../SearchForm/searchForm";

class Search extends React.Component {
  state = {
    result: Employees,
    search: ""
  };

  componentDidMount() {
    console.log(this.state.result);
  }

  render() {
    return (
      <>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <SearchForm />
                <hr />
                <SearchResults employees={this.state.result} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;
