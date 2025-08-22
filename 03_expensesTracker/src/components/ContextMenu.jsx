import React from 'react'

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  expenses,
  setFormData,
  setEdit
}) {
  if (!menuPosition.left) return
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          setMenuPosition({})
          const expenseToEdit = expenses.find(expense => expense.id === rowId)
          if (expenseToEdit) {
            setFormData(expenseToEdit)
            setEdit(true)
          }

        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          )
          setMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  )
}