//import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Header from "./Header";
//import SubHeader from './Header/SubHeader';
import CoinList from './Body/CoinList';
import React from 'react';


function App() {
  const [showSideBar, setShowSideBar] = React.useState
  return (
    <Container >
      <Header setShowSideBar={setShowSideBar}/>

      <CoinList />
    </Container >
  );
}

export default App;
