import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopAppBar from './components/core/TopAppBar';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <TopAppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
