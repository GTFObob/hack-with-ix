import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Cardd from './Cardd'

export default class CardsList extends Component {

    render() {
        var elements = [{'name': 'Super card', 'id': 1}, {'name': 'Other card', 'id': 2}, {'name': 'Last card', 'id': 3}];
        
        var cards = [];
        for (var i=0, element; element = elements[i]; i++) {
            console.log(element.name);
            cards.push(<li><Cardd value={element.name} /></li>);
        }

        return ( 
            <ul>
                {cards}
            </ul>
        )
    }
}

