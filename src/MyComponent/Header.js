import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
    
  }




  render() {
      return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">CodeKul</a>
      
          
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Search</button>
          
        </form>
      </div>

  </nav> 
        </div>
    )
}
}

