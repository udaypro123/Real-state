
import './App.css';
import Body from './components/body/Body';
import Companies from './components/companies/Companies';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Getstarted from './components/getstarted/Getstarted';
import Header from './components/header/Header';
import Residencies from './components/residensies/Residencies';
import Value from './components/value/Value';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default App;
