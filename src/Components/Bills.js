import { useEffect, useState } from "react"
import NewBillForm from "./NewBillForm"
import BillCard from "./BillCard"

function Bills() {

    const [bills, setBills] = useState([])
    const [monthDays, setMonthDays] = useState([])
    const [day, setDay] = useState('')

    function renderBills(monthDays) {
        const allBills = []
        const dayBills = monthDays.map(day => day.bills)
        dayBills.map(dayBill => {
          dayBill.forEach(bill => allBills.push(bill))
        })
        setBills(allBills)
    }

    const fetchedMonthDays = () => {
        fetch('http://localhost:9292/month_days')
        .then(res => res.json())
        .then(monthDays => {
            setMonthDays(monthDays)
            renderBills(monthDays)
        })
    }

    useEffect(() => {
        fetchedMonthDays()
    }, [])

    function addBill(billCard) {
        setBills([...bills, billCard])
    }

    function updateBill(updatedBill) {
        const updatedBillList = bills.map(bill => {
            if(bill.id === updatedBill.id) {
              return updatedBill
            } else {
              return bill
            }
        })
        setBills(updatedBillList)
    }

    function deleteBill(id) {
        fetch(`http://localhost:9292/bills/${id}`, {
            method: 'DELETE'
        })
        const filteredBills = bills.filter(bill => bill.id !== id)
        setBills(filteredBills)
    }

    function addMonthDay(data) {
        setMonthDays([...monthDays, data].sort((a, b) => (a.day > b.day) ? 1 : -1))
    }

    function handleClick(day){
        setDay(day)
    }

    const displayDayBtns = monthDays.map(day => {
        return <button key={day.id} onClick={() => handleClick(day)}>{day.day}</button>
    })

    return(
        <div>
            <div className="row">
                <div className= "col s3 grey">
                    <NewBillForm addBill={addBill} addMonthDay={addMonthDay} />
                    <br />
                    <h5 className="center new-task-header">Days With Bills Due</h5>
                    {displayDayBtns}
                </div>
                <div className= "col s9 teal center">
                    {day === '' ? bills.map(bill => {
                        return <BillCard key={bill.id} bill={bill} updateBill={updateBill} deleteBill={deleteBill} />
                    }) : day.bills.map(bill => {
                            return <BillCard key={bill.id} bill={bill} updateBill={updateBill} deleteBill={deleteBill} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Bills