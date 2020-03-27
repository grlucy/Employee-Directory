import React from "react";
import Employees from "../../employees.json";
import SearchResults from "../SearchResults/searchResults";
import SearchForm from "../SearchForm/searchForm";

class Search extends React.Component {
  state = {
    result: Employees.sort((a, b) => {
      const lastNameA = a.lastName.toUpperCase();
      const lastNameB = b.lastName.toUpperCase();
      let comparison = 0;
      lastNameA > lastNameB
        ? (comparison = 1)
        : lastNameB > lastNameA
        ? (comparison = -1)
        : (comparison = 0);
      return comparison;
    }),
    search: ""
  };

  componentDidMount() {
    console.log(this.state.result);
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleSearch = event => {
    if (this.state.search.trim() === "") {
      return;
    }
    console.log(`this.state.search is: ${this.state.search}`);
  };

  handleClear = event => {
    console.log(`clear btn was clicked`);
    this.setState({
      result: Employees.sort((a, b) => {
        const lastNameA = a.lastName.toUpperCase();
        const lastNameB = b.lastName.toUpperCase();
        let comparison = 0;
        lastNameA > lastNameB
          ? (comparison = 1)
          : lastNameB > lastNameA
          ? (comparison = -1)
          : (comparison = 0);
        return comparison;
      }),
      search: ""
    });
  };

  render() {
    return (
      <>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <SearchForm
                  handleInputChange={this.handleInputChange}
                  handleSubmit={this.handleSubmit}
                  handleSearch={this.handleSearch}
                  handleClear={this.handleClear}
                  search={this.state.search}
                />
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
