import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Page2() {
  const [number, setNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${number}`);
    setNumber(0);
  }

  return (
    <div>
      <h1>Welcome to Page 2!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
        </label>
        <Link to="/"> <button  type="submit">Submit</button> </Link>
      </form>
    </div>
  );
}


export default Page2;