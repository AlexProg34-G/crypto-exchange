//import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Header from "./Header/Navigation";
import SubHeader from './Header/SubHeader';
import CoinList from './Body/CoinList';
import React from 'react';


function App() {
  const [showSideBar, setShowSideBar] = React.useState
  return (
    <Container >
      <Header />
      <SubHeader />
      <CoinList />
    </Container >
  );
}

export default App;
