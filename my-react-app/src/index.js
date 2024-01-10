import React from 'react';
import ReactDOM from 'react-dom';


function TemporaryName(name) {

  return(

    <><div>
      <strong>React</strong>
      <div>
        This is my first React app.
      </div>
    </div>
    <ol className="reasons">
        <li className="reasons">to be better at frontend </li>
        <li className="reasons">to do better</li>
        <li className="reasons">Master web dev</li>
        <li className="reasons">learn</li>
      </ol></>
  )
   
};


ReactDOM.render(<TemporaryName/>, document.getElementById('root'));
