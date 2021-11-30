
import { useState  } from 'react';
import Header from './components/header/Header';
import Input from './components/inputs/Input';
import MainList from './components/lists/MainList';
import { InputContext, HeaderContext, ListsContext } from './context/context';
import {v4 as uuidv4} from 'uuid'
import './App.css';
require('dotenv').config()

function App() {
  console.log(process.env)

  const [budget, setBudget] = useState(0)

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  const [option, setOption] = useState("+")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  const [incomeArray, setIncomeArray] = useState([])
  const [expenseArray, setExpenseArray] = useState([])

  function handleInputForm(ops, des, amt){
    console.log(ops, des, amt)

    if(ops === "+"){
      const newIncomeArray = [...incomeArray, 
        {
          id: uuidv4(),
          description : des,
          amount: amt
        }
      ]
      setIncomeArray(newIncomeArray)
      setIncome(income + Number(amt))
      setBudget(budget + Number(amt))
    }

    else if(ops === "-"){
      const newExpenseArray = [...expenseArray, 
        {
          id: uuidv4(),
          description : des,
          amount: amt
        }
      ]
      setExpenseArray(newExpenseArray)
      setExpense(expense + Number(amt))
      setBudget(budget - Number(amt))
    }
  }

  function handleDelete(id, type){
    if(type === "income"){
      const deletedItem = incomeArray.filter(item => item.id === id)
      const newIncomeArray = incomeArray.filter(item => item.id !== id)
      setIncomeArray(newIncomeArray)
      setIncome(income - Number(deletedItem[0].amount))
      setBudget(budget - Number(deletedItem[0].amount))
    }else{
      const deletedItem = expenseArray.filter(item => item.id === id)
      const newExpenseArray = expenseArray.filter(item => item.id !== id)
      setExpenseArray(newExpenseArray)
      setExpense(expense - Number(deletedItem[0].amount))
      setBudget(budget + Number(deletedItem[0].amount))
    }
  }

  const headertContextValue = {
    budget,
    income,
    expense
  }
  const InputContextValue = {
    handleInputForm,
    option,
    description,
    amount,
    setOption,
    setDescription,
    setAmount
  }
  const listsContextValue = {
    handleDelete,
    incomeArray,
    expenseArray
  }

  return (
    <div className="App">
      <HeaderContext.Provider value={headertContextValue}>
        <Header />
      </HeaderContext.Provider>

      <InputContext.Provider value={InputContextValue}>
        <Input />
      </InputContext.Provider>

      <ListsContext.Provider value={listsContextValue}>
        <MainList />
      </ListsContext.Provider>
    </div>
  );
}

export default App;
