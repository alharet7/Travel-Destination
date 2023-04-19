import DataJson from './data/db.json';


import Home from "./components/home/Home";


function App() {
  return (
    <>
      <Home data={DataJson}/>
    </>
  );
}

export default App;