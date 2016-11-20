import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from 'lib/react/form';
import { Button } from 'react-materialize';

import {DDFormat, DDLocation, DDPlatform} from './Dropb'
import CardsList from "./CardsList"

export default class Search extends Component {
  constructor () {
    super()
    this.state = { results : [] }
  }

  getData() {

    console.log("HELLO");

    var platform = $("#platform").val();
    var format = $("#format").val();
    var location = $("#location").val();

    console.log('http://localhost:8000/query-rank?dc='+location+"&pf="+platform+"&ft="+format+"&limit=20");

    fetch('http://localhost:8000/query-rank?dc='+location+"&pf="+platform+"&ft="+format+"&limit=20")
      .then(res => res.json())
      .then(json => {
        this.setState({ results: json.data})
      })
      .catch(err => { console.log('ERROR', err); });
  }



  render() {
    return (
      <div id="searchForm" >
        <label> Enter the values, b </label>
        <DDFormat />
        <DDPlatform />
		    <DDLocation />
        <Button onClick={this.getData.bind(this)} id="searchButton" type="submit" value="Submit" waves='light' >Search</Button>
        <CardsList results={this.state.results} />
      </div>
    );
  }


}