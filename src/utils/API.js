import axios from "axios";

function getEmployees(amount) {
    return axios.get(`https://randomuser.me/api/?results=${amount}`);
}

export default getEmployees;