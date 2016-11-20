import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Line } from 'react-chartjs-2'

export default class Graphh extends Component {

    constructor () {
        super()
      }


    render() {
        var data = {
            labels: {this.props.timestamps},
            datasets: [{
                data: {this.pros.cpms}
                
            }
            ]
        };
        
        return (
            <Line
                data={data}
                width={50}
                height={50}
                animation={true}
                options={{
                    maintainAspectRatio: false
                    }} />


            )
    }

    


}

