import './Goals.css'
const Goals = () => {
  return (
    <div className='Goals'>
        <div className='MyGoal'>
          <h3 className='mg0 mdText bolderFontWeight fontBitter textColorPrimary'>$300,000</h3>
          <h5 className='smText  textColorSecondary Goals__numberMeaning'>My Goal</h5>
          <hr className='Goal__hr'/>
        </div> 
        <div className='GoalAchieved'>
          <h4 className=' bolderFontWeight mg0 textColorTertiary'>59%</h4>
          <h5 className='textColorSecondary Goals__numberMeaning'>Goal Achieved</h5>
          <hr className='Goal__hr'/>
        </div>
        <div className='EstIncome'>
          <h4 className='bolderFontWeight mg0 textColorTertiary'>K 300</h4>
          <h5 className='textColorSecondary Goals__numberMeaning'>Est. Monthly Income</h5>
          <hr className='Goal__hr'/>
        </div>
      </div>
  )
}

export default Goals