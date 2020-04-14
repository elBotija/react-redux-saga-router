import axios from 'axios'

const baseUrl = 'https://www.omdbapi.com/?apikey=7cd0e986'

export const apiCall = (url, data, headers, method) => axios({
  method,
  url: baseUrl + url,
  data,
  headers
})