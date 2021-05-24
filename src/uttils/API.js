import axios from 'axios'

export default axios.create({
  baseURL: "https://wallet-app-jupyter.herokuapp.com/api/v1",
  responseType: "json"
})