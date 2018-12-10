import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/AppBar';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Grid from '@material-ui/core/Grid';

import MoneyInput from './components/MoneyInput';
import SelectInput from './components/SelectInput';
import SwitchInput from './components/SwitchInput';
import { CardActions, Typography } from '@material-ui/core';

import { calculateTax } from './actions'

class App extends Component {

  constructor () {
    super();

    this.state = {
      grossSalary: 0,
      isRetired: false,
      hasPartner: false,
      livesInPatagonia: false,
      childrenCount: 0,
      rentDeduction: 0,
      mortgageDeduction: 0,
      annualTax: undefined,
      monthlyTax: undefined,
      proportion: undefined,
      marginalProportion: undefined,
      netSalary: undefined
    }
  }

  changeValue = (valueName, value) => {
    this.setState({ [valueName]: value})
  }

  handleCalculate = () => {
    calculateTax(this.state)
  }

  render() {
    return (
      <div className="App">
        <Grid
          container
          direction="row"
          spacing={24}
        >
        {/* <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Calculadora de Impuesto a las Ganancias 2019
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Grid item xs={12} sm={6}>
          <Card raised>
            <CardHeader title="Tu información" />
            <CardContent>
              <MoneyInput
                label="¿Cuál es tu salario bruto?"
                changeValue={this.changeValue.bind(this)}
                valueName="grossSalary"
              />
              <SwitchInput
                label="¿Sos jubilado?"     
                changeValue={this.changeValue.bind(this)}
                valueName="isRetired"
              />
              <SwitchInput
                label="¿Tenés cónyuge a cargo?"                  
                changeValue={this.changeValue.bind(this)}
                valueName="hasPartner"
              />
              <SwitchInput
                label="¿Vivís en la Patagonia?"                                  
                changeValue={this.changeValue.bind(this)}
                valueName="livesInPatagonia"
              />
              <SelectInput />
              <MoneyInput              
                label="¿Cuánto pagás de alquiler?"
                changeValue={this.changeValue.bind(this)}
                valueName="rentDeduction"
              />
              <MoneyInput              
                label="¿Cuánto pagás de hipoteca?"
                changeValue={this.changeValue.bind(this)}
                valueName="mortgageDeduction"
              />
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
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card raised>
            <CardHeader
              title="Tus resultados"
            />
            <CardContent>
              <Typography>Impuesto anual</Typography>
              <Typography>Impuesto mensual</Typography>
              <Typography>Alícuota</Typography>
              <Typography>Alícuota marginal</Typography>
              <Typography>Salario neto</Typography>
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
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
