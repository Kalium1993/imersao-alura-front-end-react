import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <div className="main-container">
        <Header/>
        <Main/>
      </div>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
