import axios from "axios";
import {transformAxiosResponse} from "./utils";

const url = '/api/users';

export const read = (name, password) => axios.get(`${url}?name=${name}&password=${password}`)
    .then(transformAxiosResponse)
    .then(users => users && users.length === 1 ? users[0] : null);