import axios from "axios";
const BASE_URL = "http://localhost:3000/pet";
import { getToken } from "./helpers";

const token = getToken();

function registerPet({ name, petrut, animal, race, chip }) {
    return axios
        .post(`${BASE_URL}/register`, { name, petrut, animal, race, chip }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            return response.data;
        });
}

function deletePet(petrut) {
    return axios
        .delete(`${BASE_URL}/delete/${petrut}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            return response.data;
        });
}

export { registerPet, deletePet };