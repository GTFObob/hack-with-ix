import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from 'lib/react/form';
import { Button } from 'react-materialize';

import {DDFormat, DDLocation, DDPlatform} from './Dropb'

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

    console.log('http://100.64.197.73:8000/query-rank?dc='+location+"&pf="+platform+"&ft="+format);

    fetch('http://100.64.197.73:8000/query-rank?dc='+location+"&pf="+platform+"&ft="+format)
      .then(res => res.json())
      .then(json => {
        console.log(json.data);
        this.setState({ results: json.data})
      })
      .catch(err => { console.log('ERROR', err); });

    console.log(this.state.results);

  }

  render() {
    return (
      <div id="searchForm" >
        <label> Enter the values, b </label>
        <DDFormat />
        <DDPlatform />
		    <DDLocation />
        <Button onClick={this.getData.bind(this)} id="searchButton" type="submit" value="Submit" waves='light' >Search</Button>
      </div>
    );

  }


}