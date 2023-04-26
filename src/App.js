
import DataJson from './data/db.json';
import Home from "./components/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import TourDetails from "./components/TourDetails/TourDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home data={DataJson} />} ></Route>
        <Route path="/city/:id" element={<TourDetails toursdata={DataJson}/>}></Route>
      </Routes>
    </>
  );
}

export default App;