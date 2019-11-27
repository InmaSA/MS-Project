import React, {Component} from 'react'
import EmployeeServices from '../src/services/employee.service'

class App extends Component {
  constructor() {
    super()
    this.state = {
      employess: []
    }
    this.employeeServices = new EmployeeServices()
  }

  componentDidMount() {
    this.employeeServices.getEmployess()
    .then(response => this.setState({employees: response.data}))
    .catch(err => console.log(err))
  }


  render() {
    console.log(this.state.employees)

    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    )
  }
}

export default App
