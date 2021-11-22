import React, {useContext} from 'react'
import {HeaderContext} from '../../context/context'

function Header() {
    const {budget, income, expense} = useContext(HeaderContext)
    return (
        <div>
            <h1>Current Budget</h1>
            <h3>Total : ${budget}</h3>
            <br />
            <h3>income: ${income}</h3>
            <h3>expense: ${expense}</h3>
        </div>
    )
}

export default Header
