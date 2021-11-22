import React, {useContext} from 'react'
import {ListsContext} from '../../context/context'
import './list.css'



function ExpenseList() {

    const {expenseArray, handleDelete} = useContext(ListsContext)

    function showExpenseList(){
        return expenseArray.map((item, index) => {
            return(
                <li key={index} className="list-item">
                    <button className="del-btn" onClick={() => handleDelete(item.id, "expense")}>Delete</button>
                    <div className="list-holder">
                        <span className="desc-red">{item.description} - ${item.amount}</span>
                    </div>
                </li>
            )
        })
    }
    return (
        <div>
            <h2>Expense</h2>
            <ul className="show-list">
                {showExpenseList()}
            </ul>
        </div>
    )
}

export default ExpenseList
