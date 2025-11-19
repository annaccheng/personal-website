import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StarOverlay from './components/StarOverlay';
import CursorTrail from './components/CursorTrail';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <div className="App">
      <CursorTrail />
      <StarOverlay />
      <Header />
      <PageTransition />
      <Footer />
    </div>
  );
}

export default App;
