import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function Skill() {
    const marginTop = { marginTop: 5 }
    return (
       <Grid>
            <FormControl  style={marginTop}>
                    <InputLabel id="demo-simple-select-disabled-label">Sectors</InputLabel>
                   
                    <Select fullWidth style={{width: 300}}>
          <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
          
        </Select></FormControl>

          <FormControl  style={marginTop}>            
        <InputLabel id="demo-simple-select-disabled-label">Skills</InputLabel>
                    <Select fullWidth style={{width: 300}}>
          <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
          
        </Select></FormControl>

        <FormControl  style={marginTop}>            
        <InputLabel id="demo-simple-select-disabled-label">Prefferd Location</InputLabel>
                    <Select fullWidth style={{width: 300}}>
          <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
          
        </Select></FormControl>

        <TextField fullWidth  label='Experience'  />
        <FormControl  style={marginTop}>            
        <InputLabel id="demo-simple-select-disabled-label">Education</InputLabel>
                    <Select fullWidth style={{width: 300}}>
          <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
          
        </Select></FormControl>
        
        <TextField fullWidth  label='Experience'  />
       </Grid>
    )
}

export default Skill
