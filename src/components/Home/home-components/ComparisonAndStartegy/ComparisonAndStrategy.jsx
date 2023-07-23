//importing slider toolkit

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import './ComparisonAndStrategy.css'

const Input = styled(MuiInput)`
  width: 42px;
`;

// function InputSlider() {
  

  

  
// }

const ComparisonAndStrategy = () => {
  const [value, setValue] = React.useState(30);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className='ComparisonAndStrategy'>
      <h4 className=' fontBitter mg0 '>How do I compare to my peers?</h4>
      <h6 className='xsmText  textColorSecondary'>These numbers represent current goal achievment</h6>

      {/* make the below Comparison it separate component and display it as flex to split the Form component 
      from circular progress bar's component  in desk view */}
      <div className='Comparison'>
        <div className='Form'>
          <div className='dropMenu'>          
            <div className='dropdown-container'>
              <div className='heading smText  textColorPrimary bolderFontWeight' >Age:
              </div>
            <select className='dropdown smText  textColorPrimary boldFontWeight'>
              {/* Your dropdown options here */}
              <option>Under 30</option>
              <option>Under 40</option>
              <option>Under 50</option>
            </select>
            </div>
            <div className='dropdown-container'>
            <div className='heading smText  textColorPrimary bolderFontWeight' >Salary:</div>
              <select className='dropdown smText  textColorPrimary boldFontWeight'>
                {/* Your dropdown options here */}
                <option>K 20 -K 30</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className='dropdown-container'>
            <div className='heading smText  textColorPrimary bolderFontWeight' >Gender:</div>
              <select className='dropdown smText  textColorPrimary boldFontWeight'>
                {/* Your dropdown options here */}
                <option>Male</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="CircularProgressBarsContainer">
          <div className="CircularProgressbarContainer">
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              strokeWidth	= {10}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#22d6aa",
                trailColor: "#d3f7ee"
              })}
            />
            <div className='smText  textColorPrimary boldFontWeight' >Average</div>
          </div>
          <div className="CircularProgressbarContainer">
            <CircularProgressbar
              value={95}
              text={`${95}%`}
              strokeWidth	= {10}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#22d6aa",
                trailColor: "#d3f7ee"
              })}
            />
            <div className='smText  textColorPrimary boldFontWeight' >Top</div>
          </div>
          <div className="CircularProgressbarContainer">
            <CircularProgressbar
              value={59}
              text={`${59}%`}
              strokeWidth	= {10}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#22d6aa",
                trailColor: "#d3f7ee"
              })}
            />
            <div className='smText  textColorPrimary boldFontWeight' >Me</div>
          </div>
        </div>

        <div className= "RetirementStrategy">
          <h4 className=' fontBitter mg0 '>Retirement Strategy</h4>
          <div className="EmployeeContribution">
            <div className='smText  textColorPrimary bolderFontWeight' >Employee Contribution</div>
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={1} alignItems="center">
                
                <Grid item xs>
                  <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    sx={
                      {
                        color: 'rgb(133 175 255)',
                        '& .MuiSlider-rail': {
                          backgroundColor: 'rgb(175 175 175)',
                        },
                        '& .MuiSlider-thumb': {
                          backgroundColor: 'white',
                        },
                      }
                    }
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={value}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                    disableUnderline
                  />
                </Grid>
                <Grid item sx={{margin: '-19px'}}>
                  <Input
                    value={"%"}
                    size="small"
                    disableUnderline
                  />
                </Grid>
              </Grid>
            </Box>  
          </div>
          <div className="RetirementAge">
            <div className='smText  textColorPrimary bolderFontWeight' >RetirementAge</div>
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={1} alignItems="center">
                
                <Grid item xs>
                  <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    sx={
                      {
                        color: 'rgb(133 175 255)',
                        '& .MuiSlider-rail': {
                          backgroundColor: 'rgb(175 175 175)',
                        },
                        '& .MuiSlider-thumb': {
                          backgroundColor: 'white',
                        },
                      }
                    }
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={value}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                    disableUnderline
                  />
                </Grid>
              </Grid>
            </Box>  
          </div>
          <div className='EmployerContribution'>
            <h5 className='smText  textColorPrimary bolderFontWeight'>Employer Contribution</h5>
            <h5 className='smText  textColorPrimary boldFontWeight'>8.4%</h5>
          </div>
          <div className='EmployerContribution'>
          <h5 className='smText  textColorPrimary bolderFontWeight'>Interest Rate</h5>
          <h5 className='smText  textColorPrimary boldFontWeight'>5%</h5>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ComparisonAndStrategy