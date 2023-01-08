import { useEffect, useState } from "react"
import EditBillForm from "./EditBillForm"

function BillCard({ bill, updateBill, deleteBill }) {

    const [isTrue, setIsTrue] = useState(false)
    const [monthDay, setMonthDay] = useState('')
    const [monthDayID, setMonthDayID] = useState(bill.month_day_id)

    // const monthDayID = bill.month_day_id
    // console.log(bill.month_day_id)

    const fetchedMonthDay = () => {
        fetch(`http://localhost:9292/month_days/${monthDayID}`)
        .then(res => res.json())
        .then(newMonthDay => setMonthDay(newMonthDay.day))
    }

    useEffect(() => {
        fetchedMonthDay()
    }, [])

    function handleSubmit(e, editedBillName, editedAmount, editedDay) {
        e.preventDefault()
        fetch('http://localhost:9292/month_days', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                day: editedDay
            })
        })
        .then(res => res.json())
        .then(data => {
            fetch(`http://localhost:9292/bills/${bill.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                  bill_name: editedBillName,
                  amount: editedAmount,
                  month_day_id: data.id
                })
            })
              .then(res => res.json())
              .then(updatedBill => {
                updateBill(updatedBill)
                setIsTrue(!isTrue)
              })
        })
    }

    function editClick() {
        setIsTrue(!isTrue)
    }

    return(
        <div>
            {isTrue ? <EditBillForm bill={bill} handleSubmit={handleSubmit} /> : null}
            <div className="container center">
                <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">{bill.bill_name}</span>
                    <p>Amount: ${bill.amount}</p>
                    <p>Monthly Due Date: {monthDay}</p>
                    </div>
                    <div className="card-action">
                    <a href="#" onClick={() => editClick()}>Edit ✎</a>
                    <a href="#" onClick={() => deleteBill(bill.id)}>Delete</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BillCard