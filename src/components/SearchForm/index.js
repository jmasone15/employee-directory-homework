import React, { useState } from "react";
import EmployeeTable from "../EmployeeTable/index";
import randomUser from "../../utils/API";

function SearchForm() {

    const [search, setSearch] = useState({
        amount: 1
    });

    const [employees, setEmployees] = useState([]);

    const handleInputChange = (e) => {
        setSearch({ amount: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        randomUser(search.amount)
            .then(res => {
                setEmployees(res.data.results);
                console.log(res.data.results);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <form style={{ textAlign: "center", border: "3px double black" }}>
                <div class="mb-3">
                    <h4>Number of Employees:</h4>
                    <select class="form-select" aria-label="Default select example" onChange={(e) => handleInputChange(e)}>
                        <option selected name="10" value={10}>10</option>
                        <option name="20" value={20} >20</option>
                        <option name="50" value={50} >50</option>
                        <option name="100" value={100} >100</option>
                    </select>
                </div>
                <br />
                <div class="mb-3">
                    <h4>Sort By:</h4>
                    <select class="form-select" aria-label="Default select example">
                        <option selected value="first">First Name</option>
                        <option value="last">Last Name</option>
                        <option value="age">Age</option>
                    </select>
                </div>
                <br />
                <div class="mb-3">
                    <h4>Filter By:</h4>
                    <select class="form-select" aria-label="Default select example">
                        <option selected value="Male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <br />
                <button type="submit" class="btn btn-dark" onClick={(e) => handleFormSubmit(e)}>Submit</button>
            </form>
            <br /><br />
            <EmployeeTable results={employees} />
        </div>
    )
}

export default SearchForm;
