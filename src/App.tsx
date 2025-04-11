import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout/Layout"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Course from './pages/Course/Course'
import Users from './pages/Users/Users'
import GlobalStyles from "./styles/GlobalStyles"
import Designer from './pages/Users/components/Designer/Designer'
import Manager from './pages/Users/components/Manager/Manager'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Clients from './pages/Clients/Clients'
import Amazon from './pages/Clients/components/Amazon/Amazon'
import Facebook from './pages/Clients/components/Facebook/Facebook'
import Google from './pages/Clients/components/Google/Google'
import Lesson18 from './lessons/Lesson18/Lesson18'
import Homework18 from './homeworks/Homework18/Homework18'

//Lessons imports
// импорт компонента Lesson06 по умолчанию
// при импорте по умолчанию можно использовать другое названия для компонента
// import Task6 from './lessons/Lesson06/Lesson06';
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from "./lessons/Lesson07/Lesson07"
// import Lesson08 from "./lessons/Lesson08/Lesson08"
// import Lesson06 from "./lessons/Lesson06/Lesson06"
// import Lesson09 from "./lessons/Lesson09/Lesson09"
// import Lesson10 from "./lessons/Lesson10/Lesson10"
// import Lesson11 from "./lessons/Lesson11/Lesson11"
// import Lesson12 from "./lessons/Lesson12/Lesson12"
// import Lesson13 from "./lessons/Lesson13/Lesson13"
// import Lesson14 from "./lessons/Lesson14/Lesson14"


//Homeworks imports
// import Homework06 from "./homeworks/Homework06/Homework06"
// import Homework07 from "./homeworks/Homework07/Homework07"
// import Homework08 from "./homeworks/Homework08/Homework08"
// import Homework09 from "./homeworks/Homework09/Homework09"
// import Homework10 from "./homeworks/Homework10/Homework10"
// import Homework11 from "./homeworks/Homework11/Homework11"
// import Homework12 from "./homeworks/Homework12/Homework12"
// import Homework14 from "./homeworks/Homework14/Homework14"
// import Homework15 from "./homeworks/Homework15/Homework15"

//Consultations imports
// import Consultation04 from "./consultations/Consultation04/Consultation04"
// import Consultation05 from "./consultations/Consultation05/Consultation05"
// import Consultation06 from './consultations/Consultation06/Consultation06'



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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/designer' element={<Designer />} />
          <Route path='/users/manager' element={<Manager />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/amazon' element={<Amazon />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/google' element={<Google />} />
          <Route path='/lesson18' element={<Lesson18 />} />
          <Route path='/homework18' element={<Homework18 />} />
          {/* path='*' - специальный маршрут, который вызовет переданный компонент в
          том случае, если в маршрутах выше не будет найдено того маршрута,
          к которому обращается пользователь */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
