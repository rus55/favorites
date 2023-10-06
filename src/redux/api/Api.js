import axios from "axios";

/*const BASE_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10';*/

const BASE_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

export const getAlbums = (page, limit= 10) => {
    console.log('api page.currentPage', page.currentPage)
    return axios.get(`${BASE_URL}?_page=${page.currentPage}&_limit=${limit}`)
        .then(response => response)
        .catch(error => error)
}

