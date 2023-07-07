import axios from "axios";
const BASE_URL = "http://localhost:3000/users";
import { getToken } from "./helpers";

const token = getToken();

function listPets({ limit, offset }) {
    return axios
        .get(`${BASE_URL}/pets`, {
            params: {
                limit,
                offset,
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((result) => {
            return result.data;
        });
}

function listAllPets({ limit, offset }) {
    return axios
        .get(`${BASE_URL}/all/pets`, {
            params: {
                limit,
                offset,
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((result) => {
            return result.data;
        });
}

export { listPets, listAllPets };
