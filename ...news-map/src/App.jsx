import { useState } from "react";
import Navbar from "./Components/navbar";
import NewsBoard from "./Components/newsBoard";

const App = () => {
  const [category, setCategory]= useState('general');
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
