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

    
        for(var key1 in elements) {        
            console.log(key1)
            for (var element in elements[key1]) {
                cards.push(<li >
                    <div className="collapsible-header"> 
                        <Cardd impressions={element["impressions"]} spend={element["spend"]} cpms={element["cpms"]} 
                        loc={element["loc"]} format={element["format"]} platform={element["platform"]}
                        timestamps={element["timestamps"]}/>
                    </div>
                    <div className="collapsible-body">
                        <p> HEY TEHRE BUDDY </p>
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

