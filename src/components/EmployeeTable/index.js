
import React, { useState } from 'react';
import EmployeeInfo from '../EmployeeInfo';

function EmployeeTable(props) {

    const [select, setSelect] = useState({
        first: "",
        last: "",
        gender: "",
        age: 0,
        id: 0,
        picture: "",
        username: "",
        password: "",
        email: "",
        phone: 0,
        location: ""
    });

    const handleClick = (e, id) => {
        e.preventDefault();
        let s = props.results.filter(x => x.login.uuid === id);
        setSelect({
            first: s[0].name.first,
            last: s[0].name.last,
            gender: s[0].gender,
            age: s[0].dob.age,
            id: s[0].login.uuid,
            picture: s[0].picture.medium,
            username: s[0].login.username,
            password: s[0].login.password,
            email: s[0].email,
            phone: s[0].cell,
            location: s[0].location.state
        });
    }

    return (
        <div className="container">
            <div className="container">
                <EmployeeInfo employee={select} />
            </div>
            <br /><br />
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map(x => (
                        <tr key={x.login.uuid} id={x.login.uuid} onClick={(e) => handleClick(e, x.login.uuid)}>
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