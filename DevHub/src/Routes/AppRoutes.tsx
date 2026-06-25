import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Componentes/Layout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Registro from '../Pages/Registro';
import Dashboard from '../Pages/Dashboard';
import EditarPerfil from '../Pages/EditarPerfil';
import Projetos from '../Pages/Projetos';
import PortifolioPublico from '../Pages/PortifolioPublico';
import Explorar from '../Pages/Explorar';
import NovoProjeto from '../Pages/NovoProjeto';
import ProtectRoute from '../Componentes/ProtectRouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'registro', element: <Registro /> },
      { path: 'portifoliopublico', element: <PortifolioPublico /> },
      { path: 'explorar', element: <Explorar /> },
      {
        element: <ProtectRoute />,

        children: [

          { path: 'dashboard', element: <Dashboard /> },
          { path: 'editarperfil', element: <EditarPerfil /> },
          { path: 'projetos', element: <Projetos /> },
          { path: '/projetos/novo', element: <NovoProjeto /> },
        ]
      }
    ]
  }
]);