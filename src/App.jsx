import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
