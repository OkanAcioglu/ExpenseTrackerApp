import axios from 'axios'

const BACKEND_URL = 'https://expensetracker-12d83-default-rtdb.firebaseio.com'

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + '/expense.json', expenseData)
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expense.json')

  const expenses = []

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    }
    expenses.push(expenseObj)
  }
  return expenses
}
