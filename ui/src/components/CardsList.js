import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Cardd from './Cardd'

export default class CardsList extends Component {

    constructor () {
        super()
      }


    render() {
        var elements = this.props.results
        var cards = [];

    
        if (!elements.length == 0) {           
            for (var i=0, element; element = elements[i]; i++) {
                cards.push(<li key={i} >
                    <div className="collapsible-header"> 
                        <Cardd impressions={element["impressions"]} spend={element["spend"]} cpm={element["cpm"]} 
                        loc={element["loc"]} i={"Rank " + (i+1).toString()} format={element["format"]} platform={element["platform"]}/>
                    </div>
                    <div className="collapsible-body">
                        
                    </div>
                    
                </li>);
            }

        }

        return (
            <ul className="collapsible popout" dataCollapsible="accordion">
                {cards}
            </ul>
        )

    }


}

