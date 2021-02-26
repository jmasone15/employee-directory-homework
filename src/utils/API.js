import axios from "axios";

function getEmployees(amount, param) {
    if (param === "male") {
        return axios.get(`https://randomuser.me/api/?results=${amount}&gender=male`);
    }
    else if (param === "female") {
        return axios.get(`https://randomuser.me/api/?results=${amount}&gender=female`);
    } else {
        return axios.get(`https://randomuser.me/api/?results=${amount}`);
    }
}

export default getEmployees;