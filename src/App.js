import React from "react";
import Header from "./components/Header/header";
import Search from "./components/Search/search";
import Footer from "./components/Footer/footer";
import "./app.css";

function App() {
  return (
    <>
      <div className="mainContentDiv">
        <Header />
        <Search />
      </div>
      <Footer />
    </>
  );
}

export default App;
