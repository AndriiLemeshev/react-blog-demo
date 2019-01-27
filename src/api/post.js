import axios from "axios";
import {transformAxiosResponse} from "./utils";

const url = '/api/posts';

export const postAPI = {
    find: (pageNum, postsCount, queryString = '') => {
        queryString = encodeURIComponent(queryString);
        const preparedUrl = `${url}/?q=${queryString}&_page=${pageNum}&_limit=${postsCount}&_sort=id&_order=desc`;
        return axios.get(preparedUrl).then(transformAxiosResponse);
    },
    all: () =>        axios.get(url).then(transformAxiosResponse),
    create: (post) => axios.post(url, post).then(transformAxiosResponse),
    read: (id)     => axios.get(`${url}/${id}`).then(transformAxiosResponse),
    update: (post) => axios.put(url, post).then(transformAxiosResponse),
    delete: (id)   => axios.delete(`${url}/${id}`).then(transformAxiosResponse)
};