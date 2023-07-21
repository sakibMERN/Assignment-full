import { useState } from "react";


const ToDoForm = () => {

          const [value, setValue] = useState('');

          return (
                    <div>
                         <form className='ToDoForm'>
                              <input 
                              type="text" 
                              className='todo-input' 
                              placeholder='What is the task today ?'
                              onChange={(e)=>console.log(e.target.value)}
                              />
                              <button type='submit' className='todo-btn'>Add Task</button>
                         </form>     
                    </div>
          );
};

export default ToDoForm;