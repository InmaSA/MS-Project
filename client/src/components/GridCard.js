import React, {Component} from 'react'
import '../styles/gridCard.css'
import Modal from 'react-bootstrap/Modal'

import ProfileDetails from './ProfileDetails'

class GridCard extends Component {

  constructor() {
    super()
    this.state= {
      showModal: false
    }
  }

  handleModalOpen = (e) => this.setState({ showModal: true })
  handleModalClose = (e) => this.setState({ showModal: false })


  render() {
    return(
      <>
        <article onClick={this.handleModalOpen} className="col-xl-3 col-lg-5 col-md-10 grid-card">
          <header className="row">
            <img className="col-2" src={this.props.image} alt={this.props.name}></img>
            <h5 className="col-10">{this.props.name}</h5>
          </header>
          <footer>
            <p>{this.props.age} years old</p>
          </footer>
        </article>
  
        <Modal centered show={this.state.showModal} onHide={this.handleModalClose}>
          <ProfileDetails {...this.props}/>
        </Modal>

      </>
    )
  }
}

export default GridCard