import { useState } from "react";


const TodoForm = () => {

          const [task, setTask] = useState('');

          const [toDo, setToDo] = useState([]);

          const AddTask = ()=>{
                    setToDo([...toDo, task]);
          };

          const RemoveToDo = (index)=>{
                    toDo.splice(index, 1);
                    setToDo([...toDo]);
          }

          return (
                    <div>
                              
                              <input onChange={(e)=>{setTask(e.target.value)}} type="text" placeholder="Write your task" />
                              <button onClick={AddTask}>Add Task</button>

                              <table>
                                        <tbody>
                                                {
                                                  toDo.length!==0?(
                                                            toDo.map((element, index)=>{
                                                                      return(
                                                                                <tr key={index.toString}>
                                                                                          <td>{element}</td>
                                                                                          <td><button onClick={()=>{RemoveToDo(index)}}>Remove</button></td>
                                                                                </tr>
                                                                      )
                                                            })
                                                  ):(<p></p>)
                                                }  
                                        </tbody>
                              </table>
                    </div>
          );
};

export default TodoForm;