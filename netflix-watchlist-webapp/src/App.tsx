import React, { Component } from 'react';
import './App.css';
import { AppConstants } from './common/constants';

type Props = {};

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <h1>{AppConstants.AppName}</h1>
    );
  }
}

export default App;
