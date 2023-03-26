import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense ({onAdd}){

    function saveExpenseData (enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        onAdd(expenseData)
    }

    return (
        <div className = 'new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseData}/>
        </div>
    )
}

export default NewExpense