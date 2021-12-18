import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, onSearchChange }) {
  const [itemFormData, setItemFormData] = useState({
    id: "",
    name: "",
    category: "Produce",
  });

  // function handleNameChange(event) {
  //   setItemFormData({ ...itemFormData, name: event.target.value });
  // }
  // function handleCategoryChange(event) {
  //   setItemFormData({ ...itemFormData, category: event.target.value });
  // }

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setItemFormData({ ...itemFormData, [name]: value });
  }

  function handleSubmit(event) {
    console.log(event.target.name.value);
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemFormData.name,
      category: itemFormData.category,
    };

    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemFormData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleChange}
          value={itemFormData.category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
