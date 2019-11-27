import axios from 'axios'

export default class EmployeeServices {
  constructor() {

      this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}`,
        withCredentials: true
      })
  }

 getEmployess = () => this.service.get('/')
}
