import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/context/UserContext';

import TopAppBar from './components/core/TopAppBar';

import Home from './pages/Home';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <TopAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
