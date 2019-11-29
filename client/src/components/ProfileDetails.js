import React from 'react'
import '../styles/profileDetails.css'

const ProfileDetails = (props) => {

  return(
    <article className="profile">
      <header className="prof-header">
        <img src={props.image} alt={props.name}></img>
        <div className="prof-data">
          <p>Name: {props.name}</p> 
          <p>Age: {props.age}</p>
        </div>
      </header>
      <footer className="bio">
        <h3>Bio:</h3>
        <p>{props.bio}</p>
      </footer>
    </article>
  )
}

export default ProfileDetails