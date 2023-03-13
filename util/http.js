import axios from 'axios'

export function storeExpense(expenseData) {
  axios.post(
    'https://expensetracker-12d83-default-rtdb.firebaseio.com/expense.json',
    expenseData
  )
}
