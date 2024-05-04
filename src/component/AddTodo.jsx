import { useEffect, useState } from "react";

const AddTodo = ({ addData, editingVal }) => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  useEffect(() => {
    editingVal ? setInput(editingVal) : null;
  }, [editingVal]);

  const handleChange = (inputVal, e) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputVal]: e.target.value,
      };
    });
  };

  console.log("Input Data", input);

  const handleAdd = () => {
    addData(input);
    setInput({ task: "", description: "" });
  };

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
      <button onClick={handleAdd}>{editingVal ? "update" : "Add"}</button>
    </>
  );
};
export default AddTodo;
