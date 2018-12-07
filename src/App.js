import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/AppBar';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import MoneyInput from './components/MoneyInput';
import SelectInput from './components/SelectInput';
import SwitchInput from './components/SwitchInput';
import { CardActions } from '@material-ui/core';

class App extends Component {

  constructor () {
    super();

    this.state = {
      grossSalary: 0

    }
  }

  handleCalculate = () => {
    console.log('fede');
  }

  render() {
    const state = this.state;

    return (
      <div className="App">
        {/* <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Calculadora de Impuesto a las Ganancias 2019
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Card raised>
          <CardHeader
            title="Tu información"
          />
          <CardContent>
            <form>
              <MoneyInput label="Salario bruto" value={state.grossSalary} />
              <SwitchInput label="¿Jubilado?" />
              <SwitchInput label="¿Cónyugue a cargo?" />
              <SwitchInput label="¿Vivís en la Patagonia?" />
              <SelectInput />
              <MoneyInput label="Alquiler" />
              <MoneyInput label="Crédito hipotecario" />
            </form>            
          </CardContent>  
          <CardActions>
            <Button
              variant="contained"
              onClick={this.handleCalculate}
            >
              Calcular
            </Button>            
          </CardActions>
        </Card>
        <br />
        <Card raised>
          <CardHeader
            title="Tu Impuesto a las Ganancias 2019"
          />
          <CardContent>
          </CardContent>
        </Card>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
