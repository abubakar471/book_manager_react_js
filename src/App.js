import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Header />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
