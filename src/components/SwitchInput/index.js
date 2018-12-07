import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default class SwitchInput extends React.Component {

  render () {
    return (
      <div>
        <FormControl>
          <FormControlLabel
            control={
              <Switch
                value="Fede14"
                color="primary"
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