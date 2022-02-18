import axios from "axios";

export const api = axios.create({
    baseURL:'https://picsum.photos/v2/list?page=3&limit=9'
})