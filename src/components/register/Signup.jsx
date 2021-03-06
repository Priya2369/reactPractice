import {React,useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Grid, Paper, Avatar, Typography, TextField, Button,FormHelperText } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import * as Yup from 'yup'
import Skill from './Skill';
import Health from './Health'
import General from './General'
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    
    const button = {margin: "20px 56%"}
    const marginTop = { marginTop: 5 }
    const initialValues={
        RegisterBy:'',
        name:'',
        gender:'',
        age:'',
        phNo:'',
        pincode:'',
        address:'',
        sector:'',
        skill:'',
        location:'',
        experience:'',
        education:'',
        otherInfo:'',
        condition:'',
        symtoms:'',
        termsAndCondition:''
    }
    const validationSchema=Yup.object().shape({
        RegisterBy:Yup.string().required("required"),
        name:Yup.string().required("required"),
        phNo:Yup.number().typeError("Enter Valid phone number").min(10,"Number should be 10 digit").required("required"),
        gender:Yup.string().oneOf(["male","female","other"],"Required").required("required"),
        age:Yup.number().required("required"),
        pincode:Yup.number().typeError(" pincode should be number").required("required"),
        address:Yup.string().required("required"),
        sector:Yup.string().required("required"),
        skill:Yup.string().required("required"),
        location:Yup.string().required("required"),
        education:Yup.string().required("required"),
        termsAndCondition:Yup.string().required("required"),

    })
    const onSubmit=(values,props)=>{
        console.log(values); 
    }
    return (
        <Grid>
            <Grid align='center'>
            <h2 style={headerStyle}> General Data</h2>
                  </Grid>
                     <Paper elevation={10} style={paperStyle}>
               
                <Formik initialValues={initialValues} 
                validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props)=>(
                        <Form>
                        <Grid>
                    <Field as={TextField}  fullWidth label='Register by' name='RegisterBy'  helperText={<ErrorMessage name='RegisterBy'/>}/>
                    <Field as={TextField} name='name' fullWidth type='text' label='Name'  placeholder="Enter your name" helperText={<ErrorMessage name='name'/>}/>
                            
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender"   name = 'gender' 
                                   style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </Field>
                                <FormHelperText><ErrorMessage name='gender'/></FormHelperText>
                            </FormControl>
                            <Field as={TextField} name='age' fullWidth label='Age' helperText={<ErrorMessage name='age'/>} />
                            <Field as={TextField} name='phNo' fullWidth label='Mobile Number(10 digit)' placeholder="+91" 
                            helperText={<ErrorMessage name='phNo'/>} />
        
                            
                            <Field as={TextField} name='pincode' fullWidth label='Pincode'  helperText={<ErrorMessage name='pincode' />}/>
                            <Field as={TextField} name='address' fullWidth label='Address'  helperText={<ErrorMessage name='address'/>}/>
                </Grid>
                
{/* skill Data */}
                <Grid>
            <FormControl  style={marginTop}>
                    <InputLabel id="demo-simple-select-disabled-label">Sectors</InputLabel>
                   
                    <Field as={Select} fullWidth style={{width: 300}} name='sector' helperText={<ErrorMessage name='sector' />}>
                 <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
          
        </Field></FormControl>
        <FormHelperText><ErrorMessage name='sector'/></FormHelperText>

        <FormControl  style={marginTop}>
                    <InputLabel id="demo-simple-select-disabled-label">Skills</InputLabel>
                   
                    <Field as={Select} fullWidth style={{width: 300}} name='skill' helperText={<ErrorMessage name='skill' />}>
                 <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
          
        </Field></FormControl>
        <FormHelperText><ErrorMessage name='skill'/></FormHelperText>

        <FormControl  style={marginTop}>
                    <InputLabel id="demo-simple-select-disabled-label">Prefferd Location</InputLabel>
                   
                    <Field as={Select} fullWidth style={{width: 300}} name='location' helperText={<ErrorMessage name='location' />}>
                 <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
          
        </Field></FormControl>
        <FormHelperText><ErrorMessage name='location'/></FormHelperText>

        

        <Field as={TextField} name='experience' fullWidth  label='Experience' helperText={<ErrorMessage name='experience' />} />
        <FormControl  style={marginTop}>
                    <InputLabel id="demo-simple-select-disabled-label">Education</InputLabel>
                   
                    <Field as={Select} fullWidth style={{width: 300}} name='education' helperText={<ErrorMessage name='education' />}>
                 <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
          
        </Field></FormControl>
        <FormHelperText><ErrorMessage name='education'/></FormHelperText>
        
        <Field as={TextField} name='otherInfo' fullWidth  label='Other Information' helperText={<ErrorMessage name='otherInfo' />} />
       </Grid>
       {/* Health data */}
       <Grid>
           <FormControl  style={marginTop}>            
        <InputLabel id="demo-simple-select-disabled-label">Current Health Condition(If any)</InputLabel>
                    <Field as={Select} name='condition' fullWidth style={{width: 300}}>
          <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
          
        </Field></FormControl>

       
        <FormControl  style={marginTop}>            
        <InputLabel id="demo-simple-select-disabled-label">Symptoms(if any)</InputLabel>
                    <Field as={Select} name='symtoms' fullWidth style={{width: 300}} >
          <MenuItem value="">
            
          </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
          
        </Field></FormControl>
        <FormControlLabel
                        control={<Field as={Checkbox} name="termsAndCondition" />}
                        label="I accept the terms and conditions."
                    />
                     <FormHelperText><ErrorMessage name='termsAndCondition'/></FormHelperText>
                    
       </Grid>
       <Grid style={button}>
                <Button type='Next' variant='contained' color='primary'>submit</Button>
                </Grid>
                        
    </Form>

                    )}
                </Formik>
            </Paper>
            <Grid style={button}>
                <Button type='Next' variant='contained' color='primary'>Next</Button>
                </Grid>
        </Grid>
    )
}

export default Signup;