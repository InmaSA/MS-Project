import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import EmployeeServices from '../src/services/employee.service'

import Dashboard from './components/Dashboard'
import Loader from './components/layouts/Loader'
import PseudoNavbar from './components/layouts/PseudoNavbar'


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
    const employees = this.state.employees
    if(employees && employees.length > 0) {
      return (
        <>
          <PseudoNavbar/>

          <Switch>
              <Route path="/" exact render={() => <Dashboard employees={this.state.employees}/>}/>
          </Switch>
        </>
      )
    }
    return (
      <>
        <PseudoNavbar/>
        <Loader/>
      </>
    )
  }
}

export default App
