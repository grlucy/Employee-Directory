import React from "react";
import Employees from "../../employees.json";
import SearchResults from "../SearchResults/searchResults";

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
              <div className="col">
                <h3>Search form</h3>
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
