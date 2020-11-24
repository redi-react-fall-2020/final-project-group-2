import logo from './img/logo.svg';
import italian from './img/Italian.svg';
import chinese from './img/chinese.svg';
import indian from './img/indian.svg';
import mexican from "./img/mexican.svg";
import thai from "./img/thai.svg";
import turkish from "./img/turkish.svg";
import './App.css';
import {Gateory,HeadingText,
  HeadingTextBold} from "./StyledComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HeadingText><strong>Support </strong>Local Restuarant, Eat <br/> <strong>Great Food</strong> </HeadingText>
        <Gateory>
       <img src={italian} alt="italian Check"/>
       <p>italian</p>
        </Gateory>
        <Gateory>
       <img src={chinese} alt="chinese Check"/>
       <p>chinese</p>
        </Gateory>
        <Gateory>
       <img src={thai} alt="thai Check"/>
       <p>thai</p>
        </Gateory>
        <Gateory>
       <img src={indian} alt="indian Check"/>
       <p>indian</p>
        </Gateory>
        <Gateory>
       <img src={mexican} alt="mexican Check"/>
       <p>mexican</p>
        </Gateory>
        <Gateory>
       <img src={turkish} alt="turkish Check"/>
       <p>turkish</p>
        </Gateory>
      
      </header>
    </div>
  );
}

export default App;
