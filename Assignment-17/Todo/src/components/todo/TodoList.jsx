import React from 'react';
import { useSelector } from 'react-redux';
import TodoDeleteAlert from './TodoDeleteAlert';

const TodoList = () => {

     const todoItem = useSelector( (state)=> state.todo.value);
     return (
          <div className='container-fluid'>
             <div className='row'>
                    <div className='col-12'>
                         <table className='table'>
                              <thead>
                                   <tr>
                                        <th>No.</th>
                                        <th>Task Name</th>
                                        <th>Remove</th>
                                        <th>Completed</th>
                                   </tr>
                              </thead>

                              <tbody>
                                   {
                                        todoItem.map((item, index)=>{
                                             return(
                                                  <tr key={String(index)}>
                                                       <td>{index}</td>
                                                       <td>{item}</td>
                                                       <td><button onClick={()=>TodoDeleteAlert(index)} className='btn btn-sm btn-danger'>Remove</button></td>
                                                       <td><input className="form-check-input justify-content-end" type="checkbox" value="" id="flexCheckDefault"/><label htmlFor="">Completed</label></td>
                                                  </tr>
                                             )
                                        })
                                   }
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default TodoList;