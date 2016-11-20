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
    				<Card className='blue-grey darken-1' textClassName='white-text' style={{textAlign:"center"}} title={this.props.i}>
    					Time:{this.props.timestamps} Impressions: {this.props.impressions}, Spends: {this.props.spend} Format: {this.props.format}, Platform: {this.props.platform}, CPM: {this.props.cpms}, Location : {this.props.loc}
    				</Card>
				</Col>

    		)
    	}
 }
