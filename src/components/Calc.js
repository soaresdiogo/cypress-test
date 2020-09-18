import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Menu from './menu/Menu';

const Calc = () => {
  const [ result, setResult ] = useState(0);
  const [ values, setValues ] = useState({
    firstValue: '',
    secondValue: ''
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setValues({
      ...values,
      [evt.target.id]: value
    });
  }

  const handleClickCalc = () => {
    setResult(parseInt(values.firstValue) + parseInt(values.secondValue));
  }

  const handleClickClear = () => {
    setValues({
      firstValue: '',
      secondValue: ''
    });
    setResult(0);
  }

  return (
    <>
      <Menu />
      <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <form noValidate autoComplete="off">
          <Box p={2}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="firstValue">First Value</InputLabel>
              <OutlinedInput 
                type="number"
                id="firstValue" 
                label="First Value" 
                value={values.firstValue}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box p={2}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="secondValue">Second Value</InputLabel>
              <OutlinedInput 
                type="number"
                id="secondValue" 
                label="Second Value" 
                value={values.secondValue}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box p={2}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={handleClickCalc}
              data-cy="calcButton" 
            >
              SUM
            </Button>
          </Box>
          <Box p={2}>
          <FormControl variant="outlined">
              <InputLabel htmlFor="secondValue">Second Value</InputLabel>
              <OutlinedInput 
                type="number"
                id="result" 
                label="Result" 
                value={result}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box p={2}>
            <Button 
              data-cy="clearButton"
              variant="contained" 
              color="default" 
              fullWidth 
              onClick={handleClickClear}>
              CLEAR
            </Button>
          </Box>
        </form>
      </Box>          
    </>
  )
}

export default Calc;
