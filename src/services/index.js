import axios from 'axios'

const baseUrl = 'http://localhost:3005'

const getAll = async (prop) => {
  const response = await axios.get(`${baseUrl}/${prop}`)
  return response.data
}

const create = async (prop, resource) => {
  const response = await axios.post(`${baseUrl}/${prop}, ${resource}`)
  return response.data
}

export default { getAll, create }
