import axios from "axios";
import {transformAxiosResponse} from "./utils";

const url = '/api/posts';

export const find = (pageNum, queryString = '', postsCount) => {
    queryString = queryString ? encodeURIComponent(queryString) : '';
    const preparedUrl = `${url}/?q=${queryString}&_page=${pageNum}&_limit=${postsCount}&_sort=id&_order=desc`;
    return axios.get(preparedUrl).then(transformAxiosResponse);
};
export const all = () =>        axios.get(url).then(transformAxiosResponse);
export const create = (post) => axios.post(url, post).then(transformAxiosResponse);
export const read = (id)     => axios.get(`${url}/${id}`).then(transformAxiosResponse);
export const update = (post) => axios.put(`${url}/${post.id}`, post).then(transformAxiosResponse);
export const remove = (id)   => axios.delete(`${url}/${id}`).then(transformAxiosResponse);
export const addComment = (postId, name, text) => read(postId)
    .then(post => {
        post.comments = post.comments || [];
        post.comments.push({
            timestamp: new Date().getTime(),
            name,
            text
        });
        return update(post);
    });