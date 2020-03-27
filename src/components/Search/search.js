import React from "react";

class Search extends React.Component {
  state = {
    result: [],
    search: ""
  };

  render() {
    return (
      <>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3>Search form</h3>
                <hr />
                <h3>Search results</h3>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;
