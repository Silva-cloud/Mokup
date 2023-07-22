import './BalanceInfo.css'

const BalanceInfo = () => {
  return (
    <div className='BalanceInfo'>
        <h4 className=' fontBitter mg0 '>Today</h4>
        <h1 className='lgText mg0 bolderFontWeight textColorTertiary fontBitter'>$19.892</h1>
        <h5 className='mg0 smText  textColorSecondary'>Account Balance</h5>
        <div className='BalanceInfo__extraBalanceInfo'>
          <div className='Year2DateContributions'>
            <h4 className='fontBitter bolderFontWeight mg0 textColorTertiary fontBitter'>$4.000</h4>
            <h5 className='mg0 smText  textColorSecondary'>Year-to-Date</h5>
          </div>
          <div className='Total Interset'>
            <h4 className='fontBitter bolderFontWeight mg0 textColorTertiary fontBitter'>$1.892</h4>
            <h5 className='mg0 smText  textColorSecondary'>Total Interest</h5>
          </div>
        </div>
        <button className='BalanceInfo__ActionButton button smText'>I want to...</button>
    </div>
  )
}

export default BalanceInfo