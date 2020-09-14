import axios from "axios";

const instance = axios.create({
  baseURL: "https://blog-js-7.firebaseio.com/"
});

export default instance;