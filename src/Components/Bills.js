import { useEffect, useState } from "react"
import NewBillForm from "./NewBillForm"
import BillCard from "./BillCard"

function Bills() {

    const [bills, setBills] = useState([])
    // const [newBill, setNewBill] = useState('')
    // const [newAmount, setNewAmount] = useState('')
    // const [dayOfMonth, setDayOfMonth] = useState('')

    const fetchedBills = () => {
        fetch('http://localhost:9292/bills')
        .then(res => res.json())
        .then(bills => setBills(bills))
    }

    useEffect(() => {
        fetchedBills()
    }, [])

    function addBill(billCard) {
        setBills([...bills, billCard])
    }

    return(
        <div>
            <div className="row">
                <div className= "col s3 grey">
                    <NewBillForm addBill={addBill} />
                </div>
                <div className= "col s9 teal">
                    {bills.map(bill => {
                        return <BillCard key={bill.id} bill={bill} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Bills