import Grid from '@mui/material/Grid';
import UserInfo from "./home-components/UserInfo/UserInfo"
import RetirementIncomesAndContributions from './home-components/RetirementIncomesAndContributions/RetirementIncomesAndContributions'
import ComparisonAndStrategy from "./home-components/ComparisonAndStartegy/ComparisonAndStrategy"


const Home = () => {
  return (
    <div className="Home">  
      <Grid container sx={{
        padding: {xs:'2rem 0', sm:'0'},

      }}>
        <Grid item xs={12} sm={3}>
          <UserInfo />
        </Grid>
        <Grid item xs={12} sm>
          <RetirementIncomesAndContributions />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ComparisonAndStrategy />
        </Grid>
      </Grid>  
    </div>
  )
}

export default Home