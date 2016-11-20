import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Cardd from './Cardd'

export default class CardsList extends Component {

    constructor () {
        super()
        this.state = { views : [] }
      }

    refresh(list) {
        elements = list;

        var cards = [];
        for (var i=0, element; element = elements[i]; i++) {
            cards.push(<li><Cardd value={element.name} /></li>);
        }

        this.setState({ views: cards})

        return ( 
            <ul>
                {cards}
            </ul>
        )

    }

    render() {
        var elements = [{'name': 'Super card', 'id': 1}, {'name': 'Other card', 'id': 2}, {'name': 'Last card', 'id': 3}];
        
        var cards = [];
        for (var i=0, element; element = elements[i]; i++) {
            console.log(element.name);
            cards.push(<li><Cardd value={element.name} /></li>);
        }

        this.setState({ views: cards})

        return ( 
            <ul>
                {cards}
            </ul>
        )
    }


}

