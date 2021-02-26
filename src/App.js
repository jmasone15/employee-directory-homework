import React from 'react';
import NavBar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";
import Footer from "./components/Footer/index";
import EmployeeTable from './components/EmployeeTable';
import SearchForm from "./components/SearchForm/index";

function App() {

  return (
    <Wrapper>
      <NavBar />
      <br /><br />
      <div className="container">
        <SearchForm />
      </div>
      <Footer />
    </Wrapper>
  )
}

export default App;
