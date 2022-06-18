import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSingnUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFormAuth = null;
  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFormAuth = null;
  }

  render() {

    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signin' element={<SingInAndSingnUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
