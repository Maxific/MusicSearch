import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({
      name: user.name,
      loading: false,
    });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        {loading ? <Loading />
          : (
            <div className="header">
              <h3 data-testid="header-user-name" className="name">{ name }</h3>
              <nav>
                <Link to="/search" data-testid="link-to-search">Поиск</Link>
                <Link to="/favorites" data-testid="link-to-favorites"> Избранное</Link>
                <Link to="/profile" data-testid="link-to-profile">Профиль</Link>
                <Link to="/" data-testid="link-to-login">Выйти</Link>
              </nav>
            </div>
          )}
      </header>
    );
  }
}

export default Header;
