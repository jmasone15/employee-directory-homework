
import React from 'react';

function EmployeeTable(props) {

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
                    {props.results.map(x => (
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

export default EmployeeTable;