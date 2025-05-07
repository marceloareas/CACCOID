import "./App.css";
import { ActionButton } from "./components/ActionButton";
import GlobalStyles from "./globalStyles";
import { FormPage } from "./pages/Form";
import { store } from "./store";
import trashIcon from "./assets/trash.svg";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <ActionButton disabled>Voltar</ActionButton>
      <ActionButton>Voltar</ActionButton>
      <ActionButton iconSrc={trashIcon} size="small" variant="danger"/>
      <ActionButton iconSrc={trashIcon} variant="danger">Voltar</ActionButton>
      <ActionButton size="large">Voltar</ActionButton>
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
