// src/app.jsx
import React from 'react'
import Col from 'lib/react/col'
import { Card }  from 'react-materialize'
import ReactDOM from 'react-dom'

export default class Cardd extends React.Component {

    render() {
    		//return (<li key={this.props.element.id}>{this.props.element.name}</li>)
    		return (

    			<Col m={6} s={12}>
    				<Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
    					{this.props.value}
    				</Card>
				</Col>

    		)
    	}
 }
