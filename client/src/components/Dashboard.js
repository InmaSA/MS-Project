import React from 'react'
import GridCard from './GridCard'

const Dashboard = (props) => {

  const employees = props.employees
  return(
    <section className="container">
      <div className="row justify-content-around">
        {
          employees.map(elm => <GridCard key={elm._id} {...elm}/>)
        }
      </div> 
    </section>
  )
}

export default Dashboard