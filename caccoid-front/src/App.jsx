import GlobalStyles from './globalStyles';
import { store } from './store';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardSolicitationForm from './pages/card-solicitation-form/CardSolicitationForm';
import EmailAuth from './pages/EmailAuth';
import MicrosoftAuth from './pages/MicrosoftAuth';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // novo import

function App() {
  return (
    <>
      <GlobalStyles />
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Navbar />
          <div style={{ paddingTop: '90px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<CardSolicitationForm />} />
              <Route path="/microsoft-auth" element={<MicrosoftAuth />} />
              <Route path="/email-auth" element={<EmailAuth />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}

export default App;
