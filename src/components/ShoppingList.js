import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchInput] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = items
    // category
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    // search term
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
// my solution commented out
  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") return true;
  //   return item.category === selectedCategory;
  // });

  // const searchItemsToDisplay = items.filter((item) => {
  //   if (search === "") {
  //     return null;
  //   } else {
  //     return (
  //       search.toLowerCase() === item.name.slice(0, search.length).toLowerCase()
  //     );
  //   }
  // });


  function onSearchChange(event) {
    const e = event.target.value;
    setSearchInput(e);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
        search={search}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
      {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {/* //my solution commented out */}
        {/* {search.length >= 1
          ? searchItemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
