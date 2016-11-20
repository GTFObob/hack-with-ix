import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from 'lib/react/form';
import { Button } from 'react-materialize';

import {DDFormat, DDLocation, DDPlatform} from './Dropb'

export default class Search extends Component {
  constructor () {
    super()
    this.results = { results : [] }
  }

  render() {
    return (
      <Form id="searchForm">
        <label> Enter the values, b </label>
        <DDFormat />
        <DDPlatform />
		    <DDLocation />
        <Button type="submit" value="Submit" waves='light'>Search</Button>
      </Form>
    );
  }
}