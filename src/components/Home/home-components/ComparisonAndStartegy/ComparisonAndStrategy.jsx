import './ComparisonAndStrategy.css'


const ComparisonAndStrategy = () => {

  return (
    <div className='ComparisonAndStrategy'>
      <h4 className=' fontBitter mg0 '>How do I compare to my peers?</h4>
      <h5 className='smText  textColorSecondary Goals__numberMeaning'>These numbers represent current goal achievment</h5>

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
      </div>
    </div>
  )
}

export default ComparisonAndStrategy