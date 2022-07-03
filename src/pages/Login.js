import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { createUser } from '../services/userAPI';
import Header from './Header';
import Loading from './Loading';
import Search from './Search';

class Login extends React.Component {
  state = {
    nomeUser: '',
    buttonDisabled: true,
    allowedLogin: '',
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

  criarUser = async () => {
    const { nomeUser } = this.state;
    this.setState({ loading: true });
    const user = await createUser({ name: nomeUser });
    this.setState({
      allowedLogin: user,
      loading: false,
    });
  }

  render() {
    const { buttonDisabled, allowedLogin, nomeUser, loading } = this.state;
    // const time = 1000;
    // console.log(nomeUser);
    return (
      <div className="geral">
        {!loading && <Header ok={ allowedLogin } nomeUsuario={ nomeUser } />}
        {loading && <Loading />}
        {
          (
            !allowedLogin
          )
            ? (
              <div data-testid="page-login">
                <input
                  data-testid="login-name-input"
                  type="text"
                  onChange={ this.pegarNome }
                  placeholder="usuário"
                />
                <Link to="/search" data-testid="link-to-search">
                  <button
                    data-testid="login-submit-button"
                    type="submit"
                    onClick={ this.criarUser }
                    disabled={ buttonDisabled }
                  >
                    Entrar
                  </button>
                </Link>
              </div>
            )
            : <Search />
        }
      </div>
    );
  }
}
export default Login;
