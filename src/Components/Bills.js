import { useEffect } from "react"
import NewBillForm from "./NewBillForm"

function Bills() {

    const fetchedBills = () => {
        fetch('http://localhost:9292/bills')
        .then(res => res.json)
        .then(data => console.log(data))
    }

    useEffect(() => {
        fetchedBills()
    }, [])

    return(
        <div>
            <div className="row">
                <div className= "col s3 grey">
                    <NewBillForm />
                </div>
                <div className= "col s9 teal">

                </div>
            </div>
        </div>
    )
}

export default Bills