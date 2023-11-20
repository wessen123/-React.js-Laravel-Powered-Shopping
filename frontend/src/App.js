import { Provider } from "react-redux";
//Part 9 - 2 - Header Nav: Mastering E-commerce Development: Building a Shopping Website
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Views from "./views";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/*" element={<Views />} />
            
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
