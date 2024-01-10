import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function CreateHeader() {
  const myImageRef = useRef(null);

  useEffect(() => {
    // Access the DOM element using the ref after the component has been rendered
    const myImage = myImageRef.current;

    
  }, []);

  return (
    <header>
      <strong>React</strong>
      <nav>
        <img ref={myImageRef} src="" alt="My Image" />
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

function CreateFooter() {
  return (
    <footer>
      work of fidelia
    </footer>
  );
}

const root = document.getElementById('root');

const rootRenderer = ReactDOM.createRoot(root);
rootRenderer.render(<MainContent />);
