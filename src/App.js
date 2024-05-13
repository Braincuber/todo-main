import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import TodoList from "./Pages/TodoList/TodoList";

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense >
          <Routes>
            <Route path="/" element={<TodoList />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
