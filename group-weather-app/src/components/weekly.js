import React, { Component } from 'react'
export default class Weekly extends Component {
    constructor() {
        super();
        this.state = {
        location: ['Yakutsk, Sakha Republic, Russia', 'Mecca, Saudi Arabia', 'Great Falls, MT', 'Tórshavn, Faroe Islands', 'San Pedro de Atacama, Chile'],
        high: ['31', '105', '67', '48', '79'],
        low: ['-32', '69', '29', '38', '46'],
      
    }
}
    render() {
        return (
            <div>
            <div>
            <h3>{this.state.location[0]}</h3>
              <p>High: {this.state.high[0]}</p>
              <p>Low: {this.state.low[0]}</p>
          </div>
            <div>
              <h3>{this.state.location[1]}</h3>
              <p>High: {this.state.high[1]}</p>
              <p>Low: {this.state.low[1]}</p>
            </div>
            <div>
              <h3>{this.state.location[2]}</h3>
              <p>High: {this.state.high[2]}</p>
              <p>Low: {this.state.low[2]}</p>
            </div>
            <div>
              <h3>{this.state.location[3]}</h3>
              <p>High: {this.state.high[3]}</p>
              <p>Low: {this.state.low[3]}</p>
            </div>
            <div>
              <h3>{this.state.location[4]}</h3>
              <p>High: {this.state.high[4]}</p>
              <p>Low: {this.state.low[4]}</p>
            </div>
          </div>
        )
      }
    }