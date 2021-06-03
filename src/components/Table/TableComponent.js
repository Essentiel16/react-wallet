import "./TableComponent.css";
import success from '../../assets/success_icon.svg'
import Moment from 'react-moment';
// import 'moment-timezone';


function TableComponent({ item }) {
  return (
    <>
      <table className="table__wrapper">
        <thead className="table__header">
          <tr>
            <th className="table__header-item">Transaction Type</th>
            <th className="table__header-item">Date</th>
            <th className="table__header-item">Status</th>
            <th className="table__header-item">Amount</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {item &&
            item.map((item) => (
              <tr className="table-body-row" key={item.transaction_id}>
                <td className="table-body-plain" style={{textTransform: 'capitalize'}}>{item?.transaction_type}</td>
                <td className="table-body-plain">
                <Moment format="MMMM D YYYY">
                {item?.transaction_date}
                </Moment> | <span className="time">
                <Moment format="HH : mm a">
                {item?.transaction_date}
                </Moment>
                </span>
                  </td>

                <td className="table-body-plain">
                  <div className="successful">
                    <img className="icon" src={success} alt=""/>
                    {item?.transaction_status}
                  </div>
                </td>
                <td className="table-body-plain">₦ {item?.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default TableComponent;
