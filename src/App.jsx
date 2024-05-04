import { useState } from "react";
import AddTodo from "./component/AddTodo";
import ListTodo from "./component/ListTodo";

function App() {
  const [data, setData] = useState([]);
  const [editingValue, setEditingValue] = useState();
  const [isEdit, setIsEdit] = useState(null);

  const handleAddData = (input) => {
    if (!input.task || !input.description) {
      alert("please fill the details");
    } else if (isEdit) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === isEdit
            ? {
                task: input.task,
                description: input.description,
              }
            : item
        )
      );

      setEditingValue(null);
      setIsEdit(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      };
      setData((prevData) => [...prevData, newData]);
    }
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleEdit = (id) => {
    const editingValue = data.find((item) => item.id === id);
    setEditingValue(editingValue);
    setIsEdit(id);
  };

  console.log("inputData", data);
  return (
    <>
      <AddTodo addData={handleAddData} editingVal={editingValue} />
      <ListTodo dataList={data} deleteData={handleDelete} edit={handleEdit} />
    </>
  );
}
export default App;
