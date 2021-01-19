import axios from 'axios'

const getMeterPrice = async () => {
  return await axios.get(process.env.URL_API1)
}

const services = {
  getMeterPrice
}

export {
  services
}
