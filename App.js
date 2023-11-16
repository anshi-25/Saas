import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import CardsDetails from './component/CardsDetails';
import Cards from './component/Cards';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
  </>
  );
}

export default App;





