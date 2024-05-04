const ListTodo = ({ dataList, edit, deleteData }) => {
  const handleDelete = (id) => {
    deleteData(id);
  };

  const handelEdit = (id) => {
    edit(id);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handelEdit(item.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
};
export default ListTodo;
