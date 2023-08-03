// Import react-circular-progressbar module and styles
import "react-circular-progressbar/dist/styles.css";

import InputSlider from './comparison-and-strategy-components/InputSlider';
import './ComparisonAndStrategy.css'
import { Box, Typography } from "@mui/material";

const ComparisonAndStrategy = () => {

  return (
    <div className='ComparisonAndStrategy'>
      
      {/* make the below Comparison it separate component and display it as flex to split the Form component 
      from circular progress bar's component  in desk view */}
      
        
        
        <div className= "RetirementStrategy">
          <h4 className=' fontBitter mg0 '>Retirement Strategy</h4>
          <div className="EmployeeContribution">
            
            <InputSlider IsTherePercent = {true} Defaultvalue={12} min={0} max={17} label={"Employee Contribution"}/>
          </div>
          <div className="RetirementAge">
            <InputSlider IsTherePercent={false} Defaultvalue={65} min={0} max={73} label={"Retirement Age"}/>
          </div>
          <div className='EmployerContribution'>
            <h5 className='smText  textColorPrimary bolderFontWeight'>Employer Contribution</h5>
            <h5 className='smText  textColorPrimary boldFontWeight'>8.4%</h5>
          </div>
          <div className='EmployerContribution'>
          <h5 className='smText  textColorPrimary bolderFontWeight'>Interest Rate</h5>
          <h5 className='smText  textColorPrimary boldFontWeight'>5%</h5>
          </div>
          <Box  sx={{
              
              display: {xs: 'none',sm: 'flex'},
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4935ff',
              color: 'white',
              borderRadius: '1rem',
              width: '100%',
              cursor: 'pointer'
            }}>
              <div>
              <Typography variant="h4" 
              sx={{
                fontSize: '1rem',
                padding: '0.75rem',
                
                }}>update</Typography> 
            </div>
          </Box>
        </div>
    </div>
  )
}

export default ComparisonAndStrategy