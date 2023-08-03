import Box from '@mui/material/Box'
import './RecentTransactions.css'
import Transaction from './Transaction'
const transactions = [
  {
  id:1,
  date: '2020-07-01',
  bank:'Bank-XX11'
},
  {
  id:2,
  date: '2020-08-07',
  bank:'Bank-XX11'
},
  {
  id:3,
  date: '2020-07-21',
  bank:'Bank-XX11'
},
]
const Transactions = transactions.map(transaction => <Transaction date={transaction.date} key={transaction.id} bank={transaction.bank} />)
// date={date} bank={bank}
const RecentTransactions = () => {
  return (
    <Box sx ={
        {
          overflowY: { xs: 'hidden', sm: 'visible' },
          height: {xs: "27vh", sm:"auto"}
        }
      } >
      <div className='RecentTransactions'>
          <h4 className=' fontBitter mg0'>Recent Transactions</h4>
          {Transactions}
      </div>
    </Box>
  )
}

export default RecentTransactions