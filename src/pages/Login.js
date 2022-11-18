
import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      input: '',
      loading: false,
      redirect: false,
    };
  }

  verify = (e) => {
    const size = e.target.value.length;
    const max = 3;

    if (size >= max) {
      this.setState({
        buttonDisabled: false,
        input: e.target.value,
      });
    } else {
      this.setState({
        buttonDisabled: true,
        input: e.target.value,
      });
    }
  }

  submit = async () => {
    const { input } = this.state;
    this.setState({ loading: true });
    await createUser({ name: input });
    this.setState({ loading: false, redirect: true });
  }

  render() {
    const { buttonDisabled, loading, redirect } = this.state;
    return (
      <div data-testid="page-login">
        <div className="divLogin">
          <h1>Попробуйте мелодии!</h1>
          {loading ? <Loading />
            : (
              <form>
                <label htmlFor="name" className="nameLabel">
                Введите ваше имя:
                  <input
                    type="text"
                    data-testid="login-name-input"
                    onChange={ this.verify }
                  />
                </label>
                <button
                  type="submit"
                  data-testid="login-submit-button"
                  disabled={ buttonDisabled }
                  onClick={ this.submit }
                  className="submitLogin"
                >
                  Войти
                </button>
              </form>
            )}
          <div>
            <footer>Разработчик Фицев Максим, 2022 г.</footer>
          </div>
          { redirect && <Redirect to="/search" /> }
        </div>
      </div>
    );
  }
}
export default Login;
