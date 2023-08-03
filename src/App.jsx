/** @format */

import React, { Component } from 'react';
import Main from './MainContent';
import Progressbar from './Progressbar';
import Progressbar2 from './Progressbar2';
export default class App extends Component {
  render() {
    return (
      <>
        <Main></Main>
        <Progressbar></Progressbar>
        <Progressbar2></Progressbar2>
      </>
    );
  }
}
