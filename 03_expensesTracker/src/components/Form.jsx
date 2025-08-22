import React from 'react'
import Input from './input'
import Select from './Select'
import useValidation from '../hooks/useValidation';

function Form({ setExpenses,formData, setFormData,isEdit }) {
  
 const { errors, validateField, validateForm } = useValidation();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    validateField(name, value);
  }

   function handleSubmit(event) {
    event.preventDefault();
    if (validateForm(formData)) {
     if(isEdit){
        setExpenses((prevExpenses) => 
          prevExpenses.map((expense) => 
            expense.id === formData.id ? formData : expense
          )
        );
        setFormData({
          title: '',
          category: '',
          amount: ''
        });
        return;
     }


      setExpenses((prevExpenses) => [
        ...prevExpenses,
        {
          id: crypto.randomUUID(),
          ...formData
        }
      ]);
      setFormData({
        title: '',
        category: '',
        amount: ''
      });
    } else {
      console.log("Form errors:", errors);
    }
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
     <Input 
       label={"Title"}
       type={"text"}
       placeholder={"Enter title"}
       value={formData.title}
       onChange={handleChange}
       error={errors.title}
     />  
     <Select 
     name={"category"}
     value={formData.category}
     onChange={handleChange}
     options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']} 
     error={errors.category} 
     />

     <Input 
       label={"Amount"}
       type={"text"}
       placeholder={"Enter amount"}
       value={formData.amount}
       onChange={handleChange}
       error={errors.amount}
     />
      <button className="add-btn" type="submit">{ isEdit ? `Update` : `Add` }</button>
    </form>
  )
}

export default Form