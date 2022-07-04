import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  state = {
    nomeUser: '',
    buttonDisabled: true,
    allowedLogin: false,
    loading: false,
  }

  pegarNome = (event) => {
    const { nomeUser } = this.state;
    this.setState({ nomeUser: event.target.value });
    const tamanho = nomeUser.length;
    const min = 2;
    if (tamanho >= min) {
      this.setState({ buttonDisabled: false });
    }
    if (tamanho < min) {
      this.setState({ buttonDisabled: true });
    }
  }

  criarUser = () => {
    const { nomeUser } = this.state;
    this.setState({ loading: true }, async () => {
      const user = await createUser({ name: nomeUser });
      console.log(user);
      this.setState({
        allowedLogin: true,
        loading: false,
      });
    });
  }

  render() {
    const { buttonDisabled, allowedLogin, loading } = this.state;
    // const time = 1000;
    // console.log(nomeUser);
    return (
      <div className="geral">
        {loading && <Loading />}
        {
          (
            !allowedLogin
          ) && (
            <div data-testid="page-login">
              <input
                data-testid="login-name-input"
                type="text"
                onChange={ this.pegarNome }
                placeholder="usuário"
              />
              <button
                data-testid="login-submit-button"
                type="submit"
                onClick={ this.criarUser }
                disabled={ buttonDisabled }
              >
                Entrar
              </button>
            </div>
          )
        }
        {allowedLogin && <Redirect data-testid="link-to-search" to="/search" />}
      </div>
    );
  }
}
export default Login;
