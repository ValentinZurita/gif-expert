import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 1) {
      onAddCategory(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
