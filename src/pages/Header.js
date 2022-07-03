import React from 'react';
// import PropTypes from 'prop-types';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    nomeUserHeader: '',
    carregando: false,
  }

  componentDidMount() {
    const { nomeUsuarioHeader } = this.state;
    this.setState({ carregando: true });
    const getUsuario = async () => {
      await getUser();
    };
    getUsuario();
    console.log(nomeUsuarioHeader);
    this.setState({
      carregando: false,
    });
  }

  render() {
    const { carregando, nomeUserHeader } = this.state;
    // const { nomeUsuario } = this.props;
    // const cabeçaFalse = this.cabeça();
    return (
      <div data-testid="header-component">
        {carregando && <Loading />}
        {(nomeUserHeader
        )
          ? (
            <h1
              data-testid="header-user-name"
            >
              {`Bem-vinde, ${nomeUserHeader}`}
            </h1>
          )
          : <p>Cabecalho</p>}
      </div>
    );
  }
}

export default Header;