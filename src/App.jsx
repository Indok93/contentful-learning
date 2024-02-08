
import './App.scss'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { Home } from './Pages/Home/Home'

function App() {

  return (
    <>
      <Header></Header>
      <Main>
        <Home></Home>
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App
