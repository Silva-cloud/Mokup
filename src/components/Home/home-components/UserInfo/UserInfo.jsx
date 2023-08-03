import BalanceInfo from './userInfo-components/BalanceInfo'
import RecentTransactions from './userInfo-components/RecentTransactions'
import UserInfoWelcome from './userInfo-components/UserInfoWelcome'
import Box from '@mui/material/Box'
import './UserInfo.css'

const UserInfo = () => {
  return (
    <div className="UserInfo">
      <Box sx={{
        marginLeft: {sm:'2rem'},
        backgroundColor: {sm:'#F8F8F8'},
        paddingTop: {sm: '0'},
      }}>
        <UserInfoWelcome />
        <BalanceInfo />
        <RecentTransactions />
      </Box>
    </div>

  )
}

export default UserInfo