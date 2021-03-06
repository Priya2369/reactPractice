import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
function Health() {
    const marginTop = { marginTop: 5 }
    return (
       <Grid>
           <FormControl  style={marginTop}>            
        <InputLabel id="demo-simple-select-disabled-label">Current Health Condition(If any)</InputLabel>
                    <Select fullWidth style={{width: 300}}>
          <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
          
        </Select></FormControl>

       
        <FormControl  style={marginTop}>            
        <InputLabel id="demo-simple-select-disabled-label">Symptoms(if any)</InputLabel>
                    <Select fullWidth style={{width: 300}}>
          <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
          
        </Select></FormControl>
        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Submit</Button>
       </Grid>
    )
}

export default Health
