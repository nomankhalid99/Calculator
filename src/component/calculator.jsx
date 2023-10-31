import React,{useState} from "react";
import {Button, Grid, TextField} from '@mui/material'


const Calculator = () => {
    const [display, setDisplay] = useState('0');
    // const [result , setResult] = useState('');

    const handleButtonClick = (value) => {
        if(display === '0' && value !== '=' && value !== 'C'){
            setDisplay(value);
        }else if (value === '='){

            try{
                setDisplay(eval(display));
            }catch(error){
                setDisplay("Error")
            }
        }else if(value === 'C'){
            setDisplay('0');
        }else{
            setDisplay(display + value)
        }
    }
  return (
    <div className="container">
        <TextField 
          className="input"
          variant="outlined"
          fullWidth
          value={display}
          inputProps={{
            readOnly: true
          }}
        />
        <Grid container  spacing={1}>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("1")}>1</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("2")}>2</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("3")}>3</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className='arthmatic-btn btn' fullWidth onClick={() => handleButtonClick("/")}>/</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("4")}>4</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("5")}>5</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("6")}>6</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className='arthmatic-btn btn' fullWidth onClick={() => handleButtonClick("*")}>*</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("7")}>7</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("8")}>8</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("9")}>9</Button>
            </Grid> 
            <Grid item xs={3}>
                <Button variant="contained" className='arthmatic-btn btn' fullWidth onClick={() => handleButtonClick("-")}>-</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick(".")}>.</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="count-btn btn" fullWidth onClick={() => handleButtonClick("0")}>0</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="equal-btn btn" fullWidth onClick={() => handleButtonClick("=")}>=</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className='arthmatic-btn btn' fullWidth onClick={() => handleButtonClick("+")}>+</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className="reset-btn btn" fullWidth onClick={() => handleButtonClick("C")}>C</Button>
            </Grid>
        </Grid>
        {/* <TextField
          variant="outlined"
          fullWidth
          value={result}
          inputProps={{
            readOnly: true
          }}
        /> */}
    </div>
  )
}

export default Calculator;