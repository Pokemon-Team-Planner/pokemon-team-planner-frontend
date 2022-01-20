import axios from "axios"

const baseUrl = '/json'

const get = async (file) => {
  const response = await axios.get(`${baseUrl}/${file}`)
  return response.data
}

const exports = { get }
export default exports