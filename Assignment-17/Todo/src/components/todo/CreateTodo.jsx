import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redux/state/todo/TodoSlice';

const CreateTodo = () => {

    const dispatch = useDispatch();

    const taskInput = useRef();



     return (
          <div className='container-fluid'>
               <div className='row'>
                    <div className="col-md-9">
                         <input ref={taskInput} type="text" placeholder='Task Name' className='form-control' />
                    </div>
                    <div className='col-md-3 justify-content-end'>
                         <button onClick={()=>dispatch(AddTodo(taskInput.current.value))} className='btn btn-success'>Add To Do</button>
                    </div>
               </div>
          </div>
     );
};

export default CreateTodo;