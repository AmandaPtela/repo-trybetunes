import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <input type="text" placeholder="usuário" />
        <input type="password" placeholder="senha" />
        <Link to="/home">Entrar</Link>
      </div>
    );
  }
}
export default Login;
