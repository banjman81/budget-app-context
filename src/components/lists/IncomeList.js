import React, {useContext} from 'react'
import {ListsContext} from '../../context/context'
import './list.css'

function IncomeList() {

    const {incomeArray, handleDelete} = useContext(ListsContext)

    function showIncomeList(){
        return incomeArray.map((item, index) => {
            return(
                <li key={index} className="list-item">
                    <button className="del-btn" onClick={() =>handleDelete(item.id, "income")}>Delete</button>
                    <div className="list-holder">
                        <span className="desc-green">{item.description} + ${item.amount}</span>
                    </div>
                </li>
            )
        })
    }

    return (
        <div>
            <h2>Income</h2>
            
            <ul className="show-list">
                {showIncomeList()}
            </ul>
        </div>
    )
}

export default IncomeList
