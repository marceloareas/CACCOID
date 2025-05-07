import "./App.css";
// import { ActionButton } from "./components/ActionButton";
// import GlobalStyles from "./globalStyles";
import { store } from "./store";
import { Layout } from "./components/layout/layout";
import trashIcon from "./assets/trash.svg";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  CardSolicitationForm  from "./pages/card-solicitation-form/CardSolicitationForm";

function App() {
  return (
    <>
      {/* <GlobalStyles />
      <ActionButton disabled>Voltar</ActionButton>
      <ActionButton>Voltar</ActionButton>
      <ActionButton iconSrc={trashIcon} size="small" variant="danger"/>
      <ActionButton iconSrc={trashIcon} variant="danger">Voltar</ActionButton>
      <ActionButton size="large">Voltar</ActionButton> */}
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
            {/* BOTA AQUI DPS A ROTA PRA TELA DE LOGIN COMO PRINCIPAL JAE */}
              <Route path="/" element={<CardSolicitationForm/>}/>
              {/* <Route path="/" element={<FormPage />} /> */}
              {/* <Route path="/form" element={<FormPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}

export default App;
