import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class SelectInput extends React.Component {

  render () {
    return (
      <div>
        <FormControl>
          <Select
            value={0}
            inputProps={{
              name: 'children',
              id: 'children-simple'
            }}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}