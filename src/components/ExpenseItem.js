import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <div>{props.dt.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.ttl}</h2>
      </div>
      <div className="expense-item__price">{props.amt }</div>
    </div>
  );
}
export default ExpenseItem;
