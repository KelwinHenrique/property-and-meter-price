import axios from 'axios'

const getMeterPrice = async () => {
  return await axios.get('http://localhost:3000/api/meters/price')
}

const services = {
  getMeterPrice
}

export {
  services
}
