import React from 'react'


export default class CardsList extends React.Component {

	let cards = [
	    {'name': 'Super card', 'id': 1},
	    {'name': 'Other card', 'id': 2},
	    {'name': 'Last card', 'id': 3}
	];

    render() {
        let elements = {cards}.map((element) => {
            return (<li key={element.id}>{element.name}</li>)
        }
        return <ul>{elements}</ul>
    }
}
