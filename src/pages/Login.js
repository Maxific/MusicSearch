
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

// import { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";

// import { auth } from "../firebase-config";
// import { Link } from "react-router-dom";

// function Login() {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const [user, setUser] = useState({});

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <div className="App">
//       <div>
//         <h3> Register User </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setRegisterEmail(event.target.value);
//           }}
//         />
//         <input
//           placeholder="Password..."
//           onChange={(event) => {
//             setRegisterPassword(event.target.value);
//           }}
//         />

//         <button onClick={register}> Create User</button>
//       </div>

//       <div>
//         <h3> Login </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setLoginEmail(event.target.value);
//           }}
//         />
//         <input
//           placeholder="Password..."
//           onChange={(event) => {
//             setLoginPassword(event.target.value);
//           }}
//         />

//       <Link to="/search" data-testid="link-to-search"> <button onClick={login}> Login</button></Link>
//       </div>

//       <h4> User Logged In: </h4>
//       {user?.email}

//       <button onClick={logout}> Sign Out </button>
//     </div>
//   );
// }

// export default Login;