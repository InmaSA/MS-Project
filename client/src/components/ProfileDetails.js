import React from 'react'

const ProfileDetails = (props) => {

  return(
    <article className="container">
      <header className="flex">
        <img src={props.image} alt={props.name}></img>
        <div>
          <p>Name: {props.name}</p> 
          <p>Age: {props.age}</p>
        </div>
      </header>
      <footer>
        <h6>Bio:</h6>
        <p>{props.bio}</p>
      </footer>
    </article>
  )
}

export default ProfileDetails