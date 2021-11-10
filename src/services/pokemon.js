import axios from "axios"

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const exports = { get }
export default exports