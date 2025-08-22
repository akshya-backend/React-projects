import Form from './Form'
import ExpenseTable from './ExpenseTable'
import { useExpenses } from '../hooks/useLocalDB'
import { useState } from 'react';

function Home() {
  const [expenses, setExpenses] = useExpenses()
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    amount: ''
  });

 const [isEdit, setIsEdit] = useState(false);

  return (
    <main>
      <div className="expense-tracker">
        <Form 
        setExpenses={setExpenses} 
        formData={formData} 
        setFormData={setFormData}
        isEdit={isEdit}
        />

        <ExpenseTable
          setFormData={setFormData}
          expenses={expenses}
          setExpenses={setExpenses}
          categoryOptions={["Grocery", "Bills", "Education", "Medicine"]}
          setEdit={setIsEdit}
        />
      </div>
    </main>
  )
}

export default Home