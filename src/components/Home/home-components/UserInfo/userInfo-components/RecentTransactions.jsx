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
    <div className='RecentTransactions'>
        <h4 className=' fontBitter mg0'>Recent Transactions</h4>
        {Transactions}
    </div>
  )
}

export default RecentTransactions