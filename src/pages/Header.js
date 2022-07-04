import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    nomeUserHeader: '',
    carregando: true,
  }

  componentDidMount = async () => {
    const usuario = await getUser().then((data) => data.name);
    this.setState({ nomeUserHeader: usuario,
      carregando: false });
  }

  render() {
    const { carregando, nomeUserHeader } = this.state;
    // const cabeçaFalse = this.cabeça();
    return (
      <div data-testid="header-component">
        {carregando && <Loading />}
        {(!carregando
        )
          ? (
            <h1
              data-testid="header-user-name"
            >
              {`Boas vindas, ${nomeUserHeader}`}
            </h1>
          )
          : <p>Cabecalho</p>}
        <nav>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          |
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          |
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
