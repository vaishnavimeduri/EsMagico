
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState([true, true, true, true]);
  const handleToggle=(num)=>{
    let arr=[...toggle];
    arr[num]=!toggle[num];
    setToggle(arr);

  }
  return (
    <div className="App" >
      <div style={{position:'relative'}}>
      <Header/>
      <Footer/>
      </div>
      <Main toggle={toggle} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
