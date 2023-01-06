import { useState } from "react"

function EditBillForm({ bill, handleSubmit }) {
    
    const [editedBillName, setEditedBillName] = useState(bill.bill_name)
    const [editedAmount, setEditedAmount] = useState(bill.amount)
    const [editedDay, setEditedDay] = useState(bill.day_of_month)

    return(
        <form onSubmit={(e) => handleSubmit(e, editedBillName, editedAmount, editedDay)}>
            <input className="white" placeholder="bill name" value={editedBillName} onChange={(e) => setEditedBillName(e.target.value)} />
            <input className="white" placeholder="amount" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
            <input className="white" placeholder="day of month" value={editedDay} onChange={(e) => setEditedDay(e.target.value)} />
            <input type= "submit" />
        </form>
    )

}

export default EditBillForm