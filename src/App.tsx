import { BrowserRouter, Route, Routes } from 'react-router-dom'


import GlobalStyles from "./styles/GlobalStyles"
import Layout from './components/Layout/Layout'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import LoginForm from "./components/LoginForm/LoginForm";
import UserData from './pages/PageNotFound/UserData/UserData'


function App() {

  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - обертка, которая собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент библиотеки, в который передаётся маршрут и тот компонент (страницу),
          который должен быть вызван, если выполнен переход по этому маршруту */}
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} /> */}
          <Route path='/loginForm' element={<LoginForm />} />
          <Route path='/userData' element={<UserData />} />

          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
