import LoadingImage from './assets/images/loading.gif';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home';
function App() {
  return (
    <>
      <div className="loader_bg">
         <div className="loader"><img src={LoadingImage} alt="#" /></div>
      </div>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
