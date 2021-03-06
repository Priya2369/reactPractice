import {React,} from 'react'
import {Formik} from 'formik'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function General() {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const button = {margin: "20px 56%"}

   
    return (
        <Grid>
            <TextField fullWidth label='Register by'  value='Self'/>
                    <TextField fullWidth type='text' label='Name' placeholder="Enter your name" />
                    
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Age'  />
                    <TextField fullWidth label='Mobile Number(10 digit)' placeholder="+91" />

                    
                    <TextField fullWidth label='Pincode'  />
                    <TextField fullWidth label='Address'  />
        </Grid>
    )
}

export default General
