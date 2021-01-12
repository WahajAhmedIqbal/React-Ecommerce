import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Route from "./router/";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Route />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
