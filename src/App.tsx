import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm/LoginForm';
import UserData from './pages/UserData/UserData';
import { UserProvider } from './context/UserContext';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import UserHistory from './pages/UserHistory/UserHistory';

const App: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/user-data" element={<UserData />} />
          <Route path="/user-history" element={<UserHistory />} />
          <Route path="*" element= {<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;

