import "./App.css";
// import { FormPage } from "./pages/Form";
import { store } from "./store";
import { Layout } from "./components/layout/layout";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  CardSolicitationForm  from "./pages/card-solicitation-form/CardSolicitationForm";

function App() {
  return (
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<CardSolicitationForm/>}/>
              {/* <Route path="/" element={<FormPage />} /> */}
              {/* <Route path="/form" element={<FormPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
  );
}

export default App;
