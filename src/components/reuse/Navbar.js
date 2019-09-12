import React, { Component } from 'react'
import { Link } from "gatsby"
import {FaBars} from "react-icons/fa"
export default class Navbar extends Component {
  state = {
    navbarState : false,
    navbarClass : 'collapse navbar-collapse',
    navitem : [{
      id : 1,
      name : 'Home',
      url : '/',
      class: 'nav-link text-white'
    },
    {
      id : 2,
      name : 'About',
      url : '/about',
      class: 'nav-link text-white'
    },
    {
        id : 3,
      name : 'Contact',
      url : '/contact',
      class: 'nav-link text-white'

    },
    {
      id: 4,
      name: 'Cart',
      url: '/',
      class: 'nav-link text-white snipcart-checkout'
    }
  ]
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
         <a href="#" className="navbar-toggler theme-bg" type="button" onClick={this.myToggler}><span><FaBars/></span></a>
        <div className= {this.state.navbarClass}>
        <ul className="navbar-nav ml-auto mr-5">
        {this.state.navitem.map(item =>{ 
        return(
          <li key={item.id} className="nav-item"><Link className={item.class} to= {item.url}>{item.name}</Link></li>

        )})}
         </ul>
        </div>   
      </nav>
    )
  }
}
