
import './App.css';
import ScrollTopButton from './webpages/ScrollTopButton';
import Header from './webpages/Header';
import Footer from './webpages/Footer';
import Webpages from './webpages/Webpages';
function App() {
  return (
    <div className="App">
      <Header/>
      <Webpages/>
      <ScrollTopButton/>
      <Footer/>
    </div>
  );
}

export default App;
