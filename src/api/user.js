import axios from "axios";
import {transformAxiosResponse} from "./utils";

const url = '/api/user';

export const userAPI = {
    read: (name, password) => axios.get(`${url}?name=${name}&password=${password}`).then(transformAxiosResponse)
};