import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 


function App() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${text}`);
    setText('');
  }

  return (
    <div>
      <h1>Welcome to my app! Pagina 1</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter some text:
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <Link to="/Page2" > <button  type="submit">Submit</button> </Link>
      </form>
    </div>
  );
  }
 
   <Link to = "/Page2"> Page 2</Link>
  
  

export default App; 
