import { useEffect, useState } from "react"
import NewBillForm from "./NewBillForm"
import BillCard from "./BillCard"

function Bills() {

    const [bills, setBills] = useState([])
    const [allMonthDays, setAllMonthDays] = useState([])
    const [day, setDay] = useState('')

    const renderDays = (bills) => {
        const billDays = bills.map(bill => {
            return bill.month_day
        })
        const uniqueIds = []
        const uniqueDays = billDays.filter(day => {
          const isDuplicate = uniqueIds.includes(day.id);
          if (!isDuplicate) {
            uniqueIds.push(day.id);
            return true;
          }
          return false;
        })
        setAllMonthDays(uniqueDays.sort((a, b) => (a.day > b.day) ? 1 : -1))
    }

    const fetchedBills = () => {
        fetch('http://localhost:9292/bills')
        .then(res => res.json())
        .then(bills => {
            setBills(bills)
            renderDays(bills)
        })
    }

    useEffect(() => {
        fetchedBills()
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
        setAllMonthDays([...allMonthDays, data].sort((a, b) => (a.day > b.day) ? 1 : -1))
    }

    function handleClick(day){
        setDay(day)
    }

    const displayDayBtns = allMonthDays.map(day => {
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
                    }) : bills.map(bill => {
                        if(bill.month_day_id === day.id){
                            return <BillCard key={bill.id} bill={bill} updateBill={updateBill} deleteBill={deleteBill} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Bills