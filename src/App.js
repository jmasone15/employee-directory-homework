import React from 'react';
import NavBar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";
import Footer from "./components/Footer/index";
import EmployeeCard from './components/EmployeeCard';

function App() {

  return (
    <Wrapper>
      <NavBar />
      <br /><br />
      <div className="container">
        <EmployeeCard />
      </div>
      <Footer />
    </Wrapper>
  )
}

export default App;
