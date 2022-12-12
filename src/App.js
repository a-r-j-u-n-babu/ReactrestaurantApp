
import Header from './componenta/Header'
import Footer from './componenta/Footer';
import RestaureantList from './componenta/RestaureantList';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <h4>Restaurant Application</h4> */}
        <RestaureantList/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
