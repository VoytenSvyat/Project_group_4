import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import Layout from './components/Layout/Layout';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginForm from "./components/LoginForm/LoginForm";
import UserData from './pages/PageNotFound/UserData/UserData';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/user-data' element={<UserData />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App; 
