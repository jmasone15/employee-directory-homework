import React, { useState } from "react";
import EmployeeTable from "../EmployeeTable/index";
import randomUser from "../../utils/API";

function SearchForm() {

    const [amount, setAmount] = useState(1);
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");
    const [employees, setEmployees] = useState([]);

    const handleInputChange = (e, info) => {
        if (info === "amount") { setAmount(e.target.value); }
        else if (info === "sort") { setSort(e.target.value); }
        else if (info === "filter") { setFilter(e.target.value); }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        randomUser(amount, filter)
            .then(res => {
                let results = res.data.results
                if (sort === "first") {
                    let sortedResults = results.sort((a, b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0));
                    setEmployees(sortedResults);
                    document.getElementById("searchForm").style.display = "none";
                }
                else if (sort === "last") {
                    let sortedResults = results.sort((a, b) => (a.name.last > b.name.last) ? 1 : ((b.name.last > a.name.last) ? -1 : 0));
                    setEmployees(sortedResults);
                    document.getElementById("searchForm").style.display = "none";
                }
                else {
                    setEmployees(results);
                    console.log(results);
                    document.getElementById("searchForm").style.display = "none";
                }

            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <form id="searchForm" style={{ textAlign: "center", border: "3px double black" }}>
                <div className="mb-3">
                    <h4>Number of Employees:</h4>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => handleInputChange(e, "amount")}>
                        <option defaultValue name="none" value={1}>Select a Number</option>
                        <option name="10" value={10}>10</option>
                        <option name="20" value={20} >20</option>
                        <option name="50" value={50} >50</option>
                        <option name="100" value={100} >100</option>
                    </select>
                </div>
                <br />
                <div className="mb-3">
                    <h4>Sort By:</h4>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => handleInputChange(e, "sort")}>
                        <option defaultValue name="none" value="">Select a Sorting Method</option>
                        <option value="first" name="first">First Name</option>
                        <option value="last" name="last">Last Name</option>
                    </select>
                </div>
                <br />
                <div className="mb-3">
                    <h4>Filter By:</h4>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => handleInputChange(e, "filter")}>
                        <option defaultValue value="" name="none">Select a Filter Method</option>
                        <option value="male" name="male">Male</option>
                        <option value="female" name="female">Female</option>
                    </select>
                </div>
                <br />
                <button type="submit" className="btn btn-dark" onClick={(e) => handleFormSubmit(e)}>Submit</button>
            </form>
            <br /><br />
            <EmployeeTable results={employees} />
        </div>
    )
}

export default SearchForm;
