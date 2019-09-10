import React, { Component } from 'react'
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import {FaBars} from "react-icons/fa"
export default class Navbar extends Component {
  state = {
    navbarState : false,
    navbarClass : 'collapse navbar-collapse',
    navitem : [{
      id : 1,
      name : 'Home',
      url : '/',
    },
    {
      id : 2,
      name : 'About',
      url : '/about',
    },
    {
        id : 3,
      name : 'Contact',
      url : '/contact',

    }]
  }
  myToggler = () =>{
    if(this.state.navbarState)
    {
      this.setState({
        navbarState : false,
        navbarClass : 'collapse navbar-collapse'
      })
    }
    else{
      this.setState({
        navbarState : true, 
        navbarClass : 'collapse navbar-collapse show'
      })
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm theme-bg text-white">
         <Link className="nav-link text-white" to="/">
         <div className="nav-item">
            <h2>Clothx</h2>
          </div>
         </Link> 
         <div className="navbar-toggler bg-transparent" type="button" onClick={this.myToggler}><span className="btn btn-transparent"><FaBars/></span></div>
        <div className= {this.state.navbarClass}>
        <ul className="navbar-nav ml-auto mr-5">
        {this.state.navitem.map(item =>{ 
        return(
          <li key={item.id} className="nav-item"><Link className="nav-link text-white" to= {item.url}>{item.name}</Link></li>

        )})}
         </ul>
        </div>   
      </nav>
    )
  }
}
