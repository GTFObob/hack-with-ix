// src/app.jsx
import React from 'react'
import ReactDOM from 'react-dom'

export default class Card extends React.Component {

    render() {
    		return (<li key={this.props.element.id}>{this.props.element.name}</li>)
    	}
 }
