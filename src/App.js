
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App" >
      <div style={{position:'relative'}}>
      <Header/>
      <Footer/>
      </div>
      <Main/>
    </div>
  );
}

export default App;
