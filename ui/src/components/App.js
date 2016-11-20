// Dependencies

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


// Components
import { Navbar, NavItem } from 'react-materialize'

import Logout from './Logout'
//import Cardd from './Cardd'
import Search from "./Search"
//import { Card }  from 'react-materialize'
import CardsList from "./CardsList"


export default class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
       <div style={{width:'100%'}} >
         <Navbar className="#1a237e indigo darken-4" left>
          <NavItem style={{float:'left'}}> <DisplayProfileImage/>  </NavItem>
          <NavItem style={{float:'left'}}> Kanye West </NavItem>
          <NavItem style={{float:'right'}} href='./logout'> Logout </NavItem>
         </Navbar>
         <Search/>


        <CardsList/>
       </div>
    )
  }
}

class DisplayProfileImage extends Component {
  render () {
    return (
      <div style = {{ width: 55, overflow: 'hidden'}}> 
        <img style = {{ width: '100%', marginTop: 5, borderRadius: '50%' }} src="http://s3.amazonaws.com/hiphopdx-production/2015/12/Kanye-West_12-01-2015.jpg"/>
      </div>
    );
  }
}

