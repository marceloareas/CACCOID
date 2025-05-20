import GlobalStyles from './globalStyles';
import { store } from './store';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardSolicitationForm } from './pages/CardSolicitationForm/CardSolicitationForm';
import EmailAuth from './pages/EmailAuth';
import MicrosoftAuth from './pages/MicrosoftAuth';
import Navbar from './components/Navbar/index';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import UserHome from './pages/UserHome';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ReduxProvider store={store}>
            <BrowserRouter>
              <Navbar />
              <div style={{ paddingTop: '90px', minHeight: '100vh' }}>
                <Routes>
                  <Route path="/" element={<MicrosoftAuth />} />
                  <Route path="/form" element={<CardSolicitationForm />} />
                  <Route path="/microsoft-auth" element={<MicrosoftAuth />} />
                  <Route path="/email-auth" element={<EmailAuth />} />
                  <Route path="/home" element={<UserHome />} />
                </Routes>
              </div>
            </BrowserRouter>
          </ReduxProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
