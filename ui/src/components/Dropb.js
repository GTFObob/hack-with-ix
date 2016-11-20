import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Input } from 'react-materialize'

export class DDFormat extends Component {
  constructor () {
    super()
  }

  render() {
    return (
        <Input defaultValue="video" id="format" s={4} type='select' label="Select Format">
          <option value='video'>Video</option>
          <option value='banner'>Banner</option>
          <option value='all'>View All</option>
        </Input>
    )
  }
}

export class DDPlatform extends Component {
  constructor () {
    super()
  }

  render() {
    return (
        <Input defaultValue="desktop" id="platform" s={4} type='select' label="Select Platform" style={{widthMax:"33%"}}>
          <option value='desktop'>Web Browsing</option>
          <option value='mobile'>Mobile Browsing</option>
          <option value='app'>Mobile Applications</option>
          <option value='all'>View All</option>
        </Input>
    )
  }
}

export class DDLocation extends Component {
  constructor () {
    super()
  }
  render() {
    return (
        <Input defaultValue="NA" id="location" s={4} type='select' label="Select Location">
          <option value='NA'>North America</option>
          <option value='EU'>Europe</option>
          <option value='AS'>Australia</option>
        </Input>
    )
  }
}
