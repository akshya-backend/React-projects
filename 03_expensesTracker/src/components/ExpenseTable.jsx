import { useState } from "react";
import ContextMenu from "./ContextMenu";

function ExpenseTable({ expenses, setExpenses, categoryOptions, setFormData, setEdit }) {
  const [menuPosition, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState(null); // 'asc' | 'desc' | null

  // filter
  let visibleExpenses =
    filter === "all"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  // sort
  if (sortOrder === "asc") {
    visibleExpenses = [...visibleExpenses].sort(
      (a, b) => Number(a.amount) - Number(b.amount)
    );
  } else if (sortOrder === "desc") {
    visibleExpenses = [...visibleExpenses].sort(
      (a, b) => Number(b.amount) - Number(a.amount)
    );
  }

  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setExpenses={setExpenses}
        expenses={expenses}
        setFormData={setFormData}
        rowId={rowId}
        setEdit={setEdit}
      />

      <table
        className="expense-table"
        onClick={() => {
          setMenuPosition({});
          setRowId("");
        }}
      >
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Title</th>
            <th>
              <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                {categoryOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => setSortOrder("asc")} 
                  style={{ cursor: "pointer" }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => setSortOrder("desc")} 
                  style={{ cursor: "pointer" }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {visibleExpenses.map((expense, index) => (
            <tr
              key={expense.id}
              onContextMenu={(e) => {
                e.preventDefault();
                setMenuPosition({ left: e.pageX + 5, top: e.pageY + 3 });
                setRowId(expense.id);
              }}
            >
              <td>{index + 1}</td>
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th></th>
            <th>
              ₹
              {visibleExpenses.reduce(
                (total, current) => total + Number(current.amount),
                0
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseTable;
