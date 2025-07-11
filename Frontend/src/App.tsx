import Login from './pages/Login'
import { AuthProvider } from './auth/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Biblioteca from './pages/Biblioteca';
import Colecao from './pages/Colecao'
import { ThemeProvider } from './theme/ThemeContext';
import ColecoesUsuario from './pages/ColecoesUsuario';

const App = () => {

  return (
  <ThemeProvider>
    <AuthProvider>    
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
            <PrivateRoute>
              <Biblioteca />
            </PrivateRoute>
          } />
          <Route path="/colecao" element={
            <PrivateRoute>
              <Colecao />
            </PrivateRoute>
          } />
          <Route path="/colecao/perfil" element={
            <PrivateRoute>
              <ColecoesUsuario />
            </PrivateRoute>
          } />
      </Routes></Router></AuthProvider> </ThemeProvider>
  );
};
export default App;
