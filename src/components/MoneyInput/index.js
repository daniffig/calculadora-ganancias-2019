import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';

export default class MoneyInput extends React.Component {
  constructor () {
    super();

    this.state = {
      value: null
    }
  }

  componentDidMount() {
    this.setState({value: this.props.value})
  }
 
  render () {
    const props = this.props
    const state = this.state;

    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="adornment-gross-salary">{props.label}</InputLabel>
          <Input
            id="adornment-gross-salary"
            type="number"
            value={state.value}
            onChange={this.handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
    )
  }
}