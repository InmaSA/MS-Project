import React from 'react'
import '../styles/dashboard.css'

import GridCard from './GridCard'

const Dashboard = (props) => {

  const employees = props.employees
  return(
    <main className="container dashboard">
      <section className="row justify-content-between">
        {
          employees.map((elm) => <GridCard key={elm._id}  {...elm}/>)
        }
      </section> 
    </main>
  )
}

export default Dashboard