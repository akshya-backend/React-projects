import { useState, useEffect } from "react";

export function useExpenses() {
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("expenses")) || []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return [expenses, setExpenses];
}
