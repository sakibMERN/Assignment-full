import React from 'react';
import Todos from '../todo/Todos';

const TodoPage = () => {
     return (
          <div>
               <div className='container my-5'>
                    <div className='row'>
                         <div className="col-12">
                              <div className="card">
                                   <div className="card-header bg-danger">
                                        <h2 className="col d-flex justify-content-center">
                                             Todo
                                        </h2>
                                   </div>

                                   <div className="card-body">
                                        <Todos/>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TodoPage;