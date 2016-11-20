import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Cardd from './Cardd'
import Graphh from "./Graphh"

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
                console.log(element)
                cards.push(<li>
                    <div className="collapsible-header"> 
                        <Cardd impressions={element["impressions"]} spend={element["spend"]} cpms={element["cpms"]} 
                        loc={element["loc"]} format={element["format"]} platform={element["platform"]}
                        timestamps={element["timestamps"]}/>
                    </div>
                    <div className="collapsible-body">
                        <Graphh timestamps={element["timestamps"]} cpms={element["cpms"]}/>
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

