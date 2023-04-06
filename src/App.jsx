import "./App.css";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import { Provider } from "react-redux";
import store from "./store/store";
import LoginSignUp from "./components/LoginSignUp";
import Homeon from "./components/Homeon";
import Carton from "./components/Carton";
import Checkouton from "./components/Checkouton";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LoginSignUp />} />
          <Route path="/home" element={<Homeon />} />
          <Route path="/cart" element={<Carton />} />
          <Route path="/checkout" element={<Checkouton />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
