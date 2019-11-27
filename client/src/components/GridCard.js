import React from 'react'

const GridCard = (props) => {

  return(
    <article className="col-lg-4 col-md-6 card">
      <header className="row">
        <img className="col-2" src={props.image} alt={props.name}></img>
        <h5 className="col-10">{props.name}</h5>
      </header>
      <footer>
        <p>{props.age} years old</p>
      </footer>
    </article>
  )
}

export default GridCard