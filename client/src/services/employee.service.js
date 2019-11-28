import axios from 'axios'

export default class EmployeeServices {
  constructor() {

      this.service = axios.create({
        baseURL: `http://localhost:5000/api`,
        withCredentials: true
      })
  }

 getEmployess = () => this.service.get('/')
}
