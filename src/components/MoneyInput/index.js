import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';

export default class MoneyInput extends React.Component {

  handleChange(e) {
    const value = e.target.value;
    const valueName = this.props.valueName;

    this.props.changeValue(valueName, value);
  }
 
  render () {
    const props = this.props;

    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="adornment-gross-salary">{props.label}</InputLabel>
          <Input
            id="adornment-gross-salary"
            type="number"
            onChange={this.handleChange.bind(this)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
    )
  }
}