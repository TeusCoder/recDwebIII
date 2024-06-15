import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Checkout from './pages/checkout/checkout';
import Account from './pages/account/account';
import Menu from './shared/menu';
import AdicionarProduto from './pages/adicionarProduto/AdicionarProduto';
import Editar from './pages/editar/Editar';

function App() {
  return (
    <>
      <Menu/>
        <Routes>
          <Route path={"*"} element={<Home />}/>
          <Route path={"/home"} element={<Home />}/>
          <Route path={"/login"} element={<Login />}/>
          <Route path={"/checkout"} element={<Checkout />}/>
          <Route path={"/account"} element={<Account />}/>
          <Route path={"/adicionar"} element={<AdicionarProduto />}/>
          <Route path={"/editar/:id"} element={<Editar />}/>
        </Routes>
    </>
  );

}

export default App;
