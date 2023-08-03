import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({IsTherePercent, Defaultvalue, min, max, label}) {
  const [value, setValue] = React.useState(Defaultvalue);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < min) {
      setValue(0);
    } else if (value > max) {
      setValue(100);
    }
  };

  const pecrcentMark = <Grid item sx={{margin: '-19px'}}>
                        <Input
                            value={"%"}
                            size="small"
                            disableUnderline
                        />
                        </Grid>

  return (
    <Box sx={{ width: '100%' }}>
              <div className='smText  textColorPrimary bolderFontWeight' >{label}</div>
              <Grid container spacing={2} alignItems="center">
                
                <Grid item xs>
                  <Slider
                    min = {min}
                    max= {max}
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
                {/*marginTop: see if its gonna effect the white boxes around 12 65 and % */}
                <Grid item sx={{marginTop: '-3px'}}>
                  <Input
                    value={value}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: {min},
                      max: { max},
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                      style: {fontWeight: 900, fontSize: '0.85rem'}
                    }}
                    disableUnderline
                  />
                </Grid>
                {
                    IsTherePercent && pecrcentMark
                }
              </Grid>
            </Box> 
  );
}
