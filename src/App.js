import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 94.12, Date: new Date(2021, 2, 21) },
    { title: "Car Insurance", amount: 294.67, Date: new Date(2021, 2, 5) },
    { title: "New Desk", amount: 450, Date: new Date(2021, 5, 12) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        ttl={expenses[0].title}
        amt={expenses[0].amount}
        dt={expenses[0].Date}
      ></ExpenseItem>
      <ExpenseItem
        ttl={expenses[1].title}
        amt={expenses[1].amount}
        dt={expenses[1].Date}
      ></ExpenseItem>
      <ExpenseItem
        ttl={expenses[2].title}
        amt={expenses[2].amount}
        dt={expenses[2].Date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
