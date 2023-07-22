import UserInfo from "./home-components/UserInfo/UserInfo"
import RetirementIncomesAndContributions from './home-components/RetirementIncomesAndContributions/RetirementIncomesAndContributions'
import ComparisonAndStrategy from "./home-components/ComparisonAndStartegy/ComparisonAndStrategy"

const Home = () => {
  return (
    <div className="Home">
      <UserInfo />
      <RetirementIncomesAndContributions />
      <ComparisonAndStrategy />
    </div>
  )
}

export default Home