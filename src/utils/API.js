import axios from "axios";

function randomUser(amount) {
    return axios.get(`https://randomuser.me/api/?results=${amount}`);
}

export default randomUser;