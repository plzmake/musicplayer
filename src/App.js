
import './App.css';
import ScrollTopButton from './webpages/Scroll/ScrollTopButton';
import Header from './webpages/Header/Header';
import Footer from './webpages/Footer/Footer';
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
