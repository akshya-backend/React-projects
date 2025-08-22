import React from 'react';
import validationConfig from '../utils/validation-rule';

function useValidation() {
  const [errors, setErrors] = React.useState({});

  function validateField(name, value) {
    const rules = validationConfig[name];
    let error = '';
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      if (rule.required && !value) {
        error = rule.message;
        break;
      }
      if (rule.maxLength && value.length > rule.maxLength) {
        error = rule.message;
        break;
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        error = rule.message;
        break;
      }
    }
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name]; // Remove if no error
      }
      return newErrors;
    });
  }

  function validateForm(formData) {
    const newErrors = {};
    for (const field in formData) {
       if(field === "id") continue; // Skip validation for id field
      const rules = validationConfig[field];      
      let error = '';
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (rule.required && !formData[field]) {
          error = rule.message;
          break;
        }
        if (rule.maxLength && formData[field].length > rule.maxLength) {
          error = rule.message;
          break;
        }
        if (rule.pattern && !rule.pattern.test(formData[field])) {
          error = rule.message;
          break;
        }
      }
      if (error) {
        newErrors[field] = error;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return {
    errors,
    validateField,
    validateForm
  };
}

export default useValidation;
