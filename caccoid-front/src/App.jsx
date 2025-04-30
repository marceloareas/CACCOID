import "./App.css";
import { FormPage } from "./pages/Form";
import { store } from "./store";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <h1>Hello World</h1>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}

export default App;
