import React, { useContext } from 'react'
import {InputContext} from '../../context/context'

function Input() {

    const {
        handleInputForm, 
        option,
        description,
        amount,
        setOption,
        setDescription,
        setAmount} = useContext(InputContext)

    function handleSubmit(e){
        e.preventDefault()
        handleInputForm(option, description, amount)
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <select onChange={(e) => setOption(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
                <input 
                    type="text" 
                    placeholder="add description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input 
                    type="number" 
                    placeholder="add amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Input
