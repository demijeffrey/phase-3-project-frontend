import { useEffect, useState } from "react"

function EditBillForm({ bill, handleSubmit }) {
    
    const [editedBillName, setEditedBillName] = useState(bill.bill_name)
    const [editedAmount, setEditedAmount] = useState(bill.amount)
    const [editedDay, setEditedDay] = useState('')

    const fetchedMonthDay = () => {
        fetch(`http://localhost:9292/month_days/${bill.month_day_id}`)
        .then(res => res.json())
        .then(newMonthDay => setEditedDay(newMonthDay.day))
    }

    useEffect(() => {
        fetchedMonthDay()
    }, [])

    return(
        <form onSubmit={(e) => handleSubmit(e, editedBillName, editedAmount, editedDay)}>
            <input className="white" placeholder="bill name" value={editedBillName} onChange={(e) => setEditedBillName(e.target.value)} />
            <input className="white" placeholder="amount" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
            <input className="white" placeholder="monthly due date" value={editedDay} onChange={(e) => setEditedDay(e.target.value)} />
            <input type= "submit" />
        </form>
    )

}

export default EditBillForm