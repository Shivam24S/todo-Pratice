import { useState } from "react";

const AddTodo = () => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  const handleChange = (inputVal, e) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputVal]: e.target.value,
      };
    });
  };

  console.log("Input Data", input);

  return (
    <>
      <input
        type="text"
        name="task"
        placeholder="Task"
        value={input.task}
        onChange={(e) => {
          handleChange("task", e);
        }}
      />
      <br />
      <input
        type="text"
        name="Description"
        placeholder="Description"
        value={input.description}
        onChange={(e) => {
          handleChange("description", e);
        }}
      />
      <br />
      <button>Add</button>
    </>
  );
};
export default AddTodo;
