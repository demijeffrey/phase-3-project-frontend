function NewBillForm() {
    return(
        <form>
            <input className="white" placeholder="bill name" />
            <input className="white" placeholder="amount" />
            <input className="white" placeholder="day of month" />
            <input type= "submit" />
        </form>
    )
}

export default NewBillForm