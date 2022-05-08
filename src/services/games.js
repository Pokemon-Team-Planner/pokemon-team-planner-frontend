import axios from "axios"

const url = '/json/games.json'

const get = async () => {
  const response = await axios.get(url)
  return response.data
}

const exports = { get }
export default exports