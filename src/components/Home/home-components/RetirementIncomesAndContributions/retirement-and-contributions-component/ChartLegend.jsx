import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import useMediaQuery from '@mui/material/useMediaQuery';

import './ChartLegend.css'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 1 : 6],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));


  const ChartLegend = () => {

  const theme = useTheme();
  const smMatched = useMediaQuery(theme.breakpoints.up('sm'));
  const progressbarVal = smMatched? 50 : 18;
  return (
    <div className='ChartLegend'>
        <div className='legendItem'>
          <Box className='colorMap'>
            <br />
            <BorderLinearProgress 
            variant="determinate" 
            value={progressbarVal}
            sx={{
              backgroundColor: `rgb(255,255,255,0.1)`,
              "& .MuiLinearProgress-bar": {
                backgroundColor: `rgb(8 0 163)`
              }}} />
          </Box>
          <h5 className='textColorSecondary Goals__numberMeaning'>Employer</h5>
          <h4 className=' bolderFontWeight mg0 textColorTertiary fontBitter'>$73,500</h4>
        </div>
        <div className='legendItem'>
          <Box className='colorMap'>
            <br />
            <BorderLinearProgress variant="determinate" value={progressbarVal}
            sx={{
              backgroundColor: `rgb(255,255,255,0.1)`,
              "& .MuiLinearProgress-bar": {
                backgroundColor: `rgb(73 53 255)`
              }}} />
          </Box>
          <h5 className='textColorSecondary Goals__numberMeaning'>Employee</h5>
          <h4 className=' bolderFontWeight mg0 textColorTertiary fontBitter'>$52,500</h4>
        </div>
        <div className='legendItem'>
          <Box className='colorMap'>
            <br />
            <BorderLinearProgress variant="determinate" value={progressbarVal}
            sx={{
              backgroundColor: `rgb(255,255,255,0.1)`,
              "& .MuiLinearProgress-bar": {
                backgroundColor: `rgb(133 175 255)`
              }}} />
          </Box>
          <h5 className='textColorSecondary Goals__numberMeaning'>Total Interest</h5>
          <h4 className=' bolderFontWeight mg0 textColorTertiary fontBitter'>$244,313</h4>
        </div>
    </div>
  )
}

export default ChartLegend