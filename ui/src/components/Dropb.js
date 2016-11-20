import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Input } from 'react-materialize'

export class DDFormat extends Component {

  render() {
    return (
        <Input defaultValue="video" id="format" s={12} label="Select Format">
          <option value='video'>Video</option>
          <option value='banner'>Banner</option>
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
        <Input defaultValue="desktop" id="platform" s={12} label="Select Platform">
          <option value='desktop'>Web Browsing</option>
          <option value='mobile'>Mobile Browsing</option>
          <option value='app'>Mobile Applications</option>
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
        <Input defaultValue="NA" id="location" s={12} label="Select Location">
          <option value='NA'>North America</option>
          <option value='EU'>Europe</option>
          <option value='AS'>Australia</option>
          <option value='4'>Asia</option>
          <option value='5'>Africa</option>
        </Input>
    )
  }
}
