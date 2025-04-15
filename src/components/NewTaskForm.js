import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text,
      category,
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  }

  const options = categories
    .filter((cat) => cat !== "All")
    .map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      {/* This label helps the test find the input by label text "Details" */}
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      {/* This label helps the test find the select by label text "Category" */}
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {options}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
