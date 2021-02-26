import React from "react";

function EmployeeInfo(props) {
    const x = props.employee;
    if (props.show === true) {
        return (
            <div className="card">
                <img src={x.picture} className="card-img-top" alt={x.first} />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "center" }}>{x.first} {x.last}</h5>
                    <p className="card-text"><b>Gender:</b> {x.gender}</p>
                    <p className="card-text"><b>Age:</b> {x.age}</p>
                    <p className="card-text"><b>ID:</b> {x.id}</p>
                    <p className="card-text"><b>Username:</b> {x.username}</p>
                    <p className="card-text"><b>Password:</b> {x.password}</p>
                    <p className="card-text"><b>Email:</b> {x.email}</p>
                    <p className="card-text"><b>Location:</b> {x.location}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card" style={{ display: "none" }}>
                <img src={x.picture} className="card-img-top" alt={x.first} />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "center" }}>{x.first} {x.last}</h5>
                    <p className="card-text"><b>Gender:</b> {x.gender}</p>
                    <p className="card-text"><b>Age:</b> {x.age}</p>
                    <p className="card-text"><b>ID:</b> {x.id}</p>
                    <p className="card-text"><b>Username:</b> {x.username}</p>
                    <p className="card-text"><b>Password:</b> {x.password}</p>
                    <p className="card-text"><b>Email:</b> {x.email}</p>
                    <p className="card-text"><b>Location:</b> {x.location}</p>
                </div>
            </div>
        )
    }

}

export default EmployeeInfo;