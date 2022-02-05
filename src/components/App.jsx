import '../styles/App.css';

import useIsMobile from '../hooks/IsMobile';
import Header from './Header';
import Description from './Description';
import Creations from './Creations';
import Footer from './Footer';

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="App">
      <Header/>
      <Description/>
      <Creations/>
      <Footer/>
    </div>
  );
}

export default App;
