import React from 'react';

const Todos = () => {
     return (
          <div className='container-fluid'>
               <div className="row">
                    <div className="col-12">
                         <table className="table">
                              <thead>
                                   <tr>
                                        <th>Task Name</th>
                                        <th>Edit</th>
                                        <th>Remove</th>
                                   </tr>
                              </thead>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default Todos;