import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import BatchesData from './Component/BatchesData';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Component/Pages/Header';
import Footer from './Component/Pages/Footer'; 
import Routing from './Component/Pages/Routing';

// import NewBatches from './Component/NewBatches';


function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
