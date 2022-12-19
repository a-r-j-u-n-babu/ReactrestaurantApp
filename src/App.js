
import Header from './componenta/Header'
import Footer from './componenta/Footer';
import RestaureantList from './componenta/RestaureantList';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Viewresturent from './componenta/Viewresturent';
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />

          {/* <h4>Restaurant Application</h4> */}
          <Routes>
            <Route path="/" element={<RestaureantList />} />
            <Route path="/viewresturent/:id" element={<Viewresturent />} />
          </Routes>
        </header>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
