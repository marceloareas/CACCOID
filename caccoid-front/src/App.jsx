import "./App.css";
import Navbar from "./components/Navbar";
import { FormPage } from "./pages/Form";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import LoginMicrosoft from "./pages/LoginMicrosoft";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <div style={{ paddingBottom: "30px" }}>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-microsoft" element={<LoginMicrosoft />} />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}

export default App;
