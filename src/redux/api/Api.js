import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

export const getAlbums = (page, limit= 10) => {
    return axios.get(`${BASE_URL}?_page=${page.currentPage}&_limit=${limit}`)
        .then(response => response)
        .catch(error => error)
}

