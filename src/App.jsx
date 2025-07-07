import './App.css';
import Header from './components/Header.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Search from './components/Search.jsx'; // Corrigido aqui

function App() {
  return (
    <>
      <Header />
      <ImageSlider />
      <Search /> {/* Corrigido aqui */}
    </>
  );
}

export default App;
