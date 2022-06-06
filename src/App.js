
import './App.css';
import Landing from "./views/Landing"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}>
      
  
      </Route>
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
