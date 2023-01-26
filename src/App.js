import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Table from './Componets/Table';
import Form from './Componets/Form';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route  path='/grid' element={ <Table/>} />
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
