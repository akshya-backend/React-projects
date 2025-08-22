 const validationConfig = {
  title: [
    { required: true, message: "Please enter title" },
    { maxLength: 20, message: "Title should be at most 20 characters long" },
  ],
  category: [{ required: true, message: "Please select a category" }],
  amount: [
    { required: true, message: "Please enter an amount" },
    {
      pattern: /^[1-9]\d*(\.\d+)?$/,
      message: "Please enter a valid number",
    },
  ],
};

export default validationConfig;