import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default class SwitchInput extends React.Component {

  handleChange(e) {
    const value = e.target.value;
    const valueName = this.props.valueName;

    this.props.changeValue(valueName, value);
  }

  render () {
    return (
      <div>
        <FormControl>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                onChange={this.handleChange.bind(this)}
              />                
            }
            label={this.props.label}        
            // labelPlacement="start"
          />
        </FormControl>
      </div>
    )
  }
}