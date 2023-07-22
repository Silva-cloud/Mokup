import BalanceInfo from './userInfo-components/BalanceInfo'
import RecentTransactions from './userInfo-components/RecentTransactions'
import UserInfoWelcome from './userInfo-components/UserInfoWelcome'
import './UserInfo.css'

const UserInfo = () => {
  return (
    <div className="UserInfo fullScreenHeight">
      <UserInfoWelcome />
      <BalanceInfo />
      <RecentTransactions />
    </div>

  )
}

export default UserInfo