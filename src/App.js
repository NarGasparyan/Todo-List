import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';

function App() {


  const [expenses, setExpenses] = useState([]);

  function addExpenseHandler (expense){
   setExpenses(prevExpenses => [expense, ...prevExpenses])
  }

  return (
    <div>
    <NewExpense onAdd = {addExpenseHandler} />
    <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
