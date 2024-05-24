//import logo from './logo.svg';
import './App.css';


//import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from "react-bootstrap/Container";
//import Header from "./Header";
//import SubHeader from './SubHeader';
//import CoinList from './CoinList';
import MotherComponenet from "./MotherComponenet";
import ChildComponent from "./ChildComponent";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <MotherComponenet>
          <ChildComponent />
        </MotherComponenet>
    </header>
  </div >
  );
}

export default App;
