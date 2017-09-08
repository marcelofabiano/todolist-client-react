import axios from 'axios'

const webserver = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  timeout: 1000,
  headers: {
    'Accept': 'application/json'
  }
});

export default webserver

