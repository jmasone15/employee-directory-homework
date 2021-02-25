import React, { useEffect, useState } from 'react';
import randomUser from "../../utils/API";

function EmployeeCard(props) {
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        randomUser(20)
            .then(res => {
                setEmployees(res.data.results);
                console.log(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <table className="table table-dark table-hover">
                <thead>
                    <th scope="col">Picture</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Number</th>
                </thead>
                <tbody>
                    {employees.map(x => (
                        <tr>
                            <img src={x.picture.medium} alt={x.name.first}></img>
                            <td>{x.name.first}</td>
                            <td>{x.name.last}</td>
                            <td>{x.email}</td>
                            <td>{x.cell}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default EmployeeCard;