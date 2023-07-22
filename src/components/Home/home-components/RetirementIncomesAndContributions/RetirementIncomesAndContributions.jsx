import './RetirementIncomesAndContributions.css'
import ContributionsOverTime from './retirement-and-contributions-component/ContributionsOverTime'
import Goals from './retirement-and-contributions-component/Goals'

const RetirementIncomesAndContributions = () => {
  return (
    <div className='RetirementIncomesAndContributions'>
      <h5 className='mg0 smText fontBitter boldFontWeight colorPurple'>Retirement Incomes</h5>
      <h3 className='mg0 mdText fontBitter textColorPrimary'>Starting Year 2056</h3>
      <Goals />
      <ContributionsOverTime />
    </div>
  )
}

export default RetirementIncomesAndContributions