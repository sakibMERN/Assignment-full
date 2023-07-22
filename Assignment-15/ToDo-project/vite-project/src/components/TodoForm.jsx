
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [toDo, setToDo] = useState([]);

  const AddTask = () => {
    if (task.trim() !== "") {
      setToDo([...toDo, task]);
      setTask("");
    }
  };

  const RemoveToDo = (index) => {
    const updatedList = [...toDo];
    updatedList.splice(index, 1);
    setToDo(updatedList);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Todo List</h1>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-primary" onClick={AddTask}>
                  Add Task
                </button>
              </div>
              <table className="table">
                <tbody>
                  {toDo.length !== 0 ? (
                    toDo.map((element, index) => (
                      <tr key={String(index)}>
                        <td style={{ color: "#0066cc" }}>{element}</td> {/* Custom color for list items */}
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => RemoveToDo(index)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2">No tasks to display</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;





