import './ExpenseForm.css';
import {useState} from 'react';



function ExpenseForm ({onSaveExpenseData}){

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChangeHandler (e){
        setEnteredTitle(e.target.value)
    }
    function amountChangeHandler (e){
        setEnteredAmount(e.target.value)
    }
    function dateChangeHandler (e){
        setEnteredDate(e.target.value)
    }

    function submitHandler (e){
        e.preventDefault();


        const expenseData ={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')

    }

    return (
      <form onSubmit = {submitHandler}>
        <div className = 'new-expense__controls'>
            <div className = 'new-expense__control'>
                <label>Title</label>
                <input type = 'text' value = {enteredTitle} onChange = {titleChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
                <label>Amount</label>
                <input type = 'number' value = {enteredAmount} min = '0.01' step = '0.01' onChange = {amountChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
                <label>Date</label>
                <input type = 'date' value = {enteredDate} min = '2019-01-01' max = '2022-12-31' onChange = {dateChangeHandler}/>
            </div>
        </div>
        <div className = 'new-expense__actions'>
            <button type = 'submit'>Add Expense</button>
        </div>
      </form>
    )
}


export default ExpenseForm