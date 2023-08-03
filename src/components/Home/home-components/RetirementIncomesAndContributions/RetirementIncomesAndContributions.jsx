import ContributionsOverTime from './retirement-and-contributions-component/ContributionsOverTime'
import Goals from './retirement-and-contributions-component/Goals'
import CircularProgressBarComponent from './retirement-and-contributions-component/CircularProgressBar'
import Stack from '@mui/material/Stack';
import './RetirementIncomesAndContributions.css'
import { Box } from '@mui/material';

const RetirementIncomesAndContributions = () => {
  return (
    <div className='RetirementIncomesAndContributions'>
      <h5 className='mg0 smText fontBitter boldFontWeight colorPurple '>Retirement Incomes</h5>
      <h3 className='mg0 mdText fontBitter textColorPrimary'>Starting Year 2056</h3>
      <Goals />
      <ContributionsOverTime />
        <div className='Comparison'>
          <Box sx={{
            height: {sm:'33svh'}
          }}>
          <h4 className=' fontBitter mg0 '>How do I compare to my peers?</h4>
          <h6 className='xsmText  textColorSecondary'>These numbers represent current goal achievment</h6>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            
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
                  <CircularProgressBarComponent label ={'Average'} value={75}/>
                  <CircularProgressBarComponent label ={'Top'} value={95}/>
                  <CircularProgressBarComponent label ={'Me'} value={59}/>
              </div>
          </Stack>
          </Box>
        </div>

    </div>
  )
}

export default RetirementIncomesAndContributions