import { useEffect, useState } from "react"
import NewBillForm from "./NewBillForm"
import BillCard from "./BillCard"

function Bills() {

    const [bills, setBills] = useState([])
    // const [monthDays, setMonthDays] = useState([])

    const fetchedBills = () => {
        fetch('http://localhost:9292/bills')
        .then(res => res.json())
        .then(bills => setBills(bills))
    }

    // const fetchedMonthDays = () => {
    //     fetch('http://localhost:9292/month_days')
    //     .then(res => res.json)
    //     .then(allMonthDays => setMonthDays(allMonthDays))
    // }

    useEffect(() => {
        fetchedBills()
        // fetchedMonthDays()
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

    return(
        <div>
            <div className="row">
                <div className= "col s3 grey">
                    <NewBillForm addBill={addBill} />
                </div>
                <div className= "col s9 teal center">
                    {bills.map(bill => {
                        return <BillCard key={bill.id} bill={bill} updateBill={updateBill} deleteBill={deleteBill} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Bills