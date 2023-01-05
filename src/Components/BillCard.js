function BillCard({ bill }) {

    return(
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{bill.bill_name}</span>
              <p>Amount: ${bill.amount}</p>
              <p>Monthly Due Date: {bill.day_of_month}</p>
            </div>
            <div className="card-action">
              <a href="#">Edit ✎</a>
              <a href="#">Delete</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BillCard