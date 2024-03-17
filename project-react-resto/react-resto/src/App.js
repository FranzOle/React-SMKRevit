import 'bootstrap/dist/css/bootstrap.min.css';
import Back from './Back/Back.js';
import Front from './Front/Front.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Front} />
          <Route path="/home" Component={Front} />
          <Route path="/admin/" Component={Back} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
