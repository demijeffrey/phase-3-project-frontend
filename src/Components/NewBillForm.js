import { useState } from "react"

function NewBillForm({ addBill }) {

    const [newBill, setNewBill] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [dayOfMonth, setDayOfMonth] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/month_days', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                day: dayOfMonth
            })
        })
        .then(res => res.json())
        .then(data => {
            fetch('http://localhost:9292/bills', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                bill_name: newBill,
                amount: newAmount,
                month_day_id: data.id
            })
        })
        .then(res => res.json())
        .then(billCard => addBill(billCard))
        })
        setNewAmount('')
        setNewBill('')
        setDayOfMonth('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="white" placeholder="bill name" value={newBill} onChange={(e) => setNewBill(e.target.value)} />
            <input className="white" placeholder="amount" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} />
            <input className="white" placeholder="monthly due date" value={dayOfMonth} onChange={(e) => setDayOfMonth(e.target.value)} />
            <input type= "submit" />
        </form>
    )

}

export default NewBillForm