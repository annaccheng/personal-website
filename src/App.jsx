import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <div className="App">
      <Header />
      <PageTransition />
      <Footer />
    </div>
  );
}

export default App;
