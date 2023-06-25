import axios from 'axios'
export default class CountryService {
  // getCountries() {
  //   return fetch('../data/countries.json')
  //     .then((res) => res.json())
  //     .then((d) => d.data)
  // }
  getCountries() {
    return axios.get('get-countries').then((d) => d.data.data)
  }
}
