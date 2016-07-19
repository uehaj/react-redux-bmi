import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BmiCalc from './BmiCalc'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  calcBMI(h, w) {
    const result = w / ((h / 100)*(h / 100))
    return Math.floor(result * 10) / 10;
  }

  handleChange({height, weight}) {
    this.props.inputDataChange({bmiValue: this.calcBMI(height, weight)})
  }

  render() {
    return (
      <MuiThemeProvider>
        <BmiCalc
          onChange={this.handleChange.bind(this)}
          bmiValue={this.props.bmiValue} />
      </MuiThemeProvider>
    );
  }
}