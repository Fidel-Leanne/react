import React from 'react';
import ReactDOM from 'react-dom/client';
import MyImage from '../public/lo'

   
    
 

function CreateHeader(){

  return(
    <header><strong>React</strong>
    <nav>
    <img src='./l'/>
    </nav>
    
    </header>
  

  );
}



function MainContent() {
  return (
    <div>


      
      <div>This is my first React app.</div>

      <ol className="reasons">
        <li>to be better at frontend</li>
        <li>to do better</li>
        <li>Master web dev</li>
        <li>learn</li>
      </ol>
    </div>
  );
}



function CreateFooter(){
  return(
    <footer>
     work of fidelia
    </footer>
  )
}

const root = document.getElementById('root');

const rootRenderer = ReactDOM.createRoot(root);
rootRenderer.render(<MainContent />)


