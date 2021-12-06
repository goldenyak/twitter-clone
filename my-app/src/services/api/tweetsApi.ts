import axios from "axios";

export function fetchTweets() {
    return axios.get('https://trycode.pw/c/2OBQ1.json').then(({ data }) => data)
}