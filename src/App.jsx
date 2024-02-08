
import './App.scss'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { AppRouter } from './Components/AppRouter/AppRouter'

function App() {

  return (
    <>
      <Header />

      <Main>
        <AppRouter />
      </Main>
      
      <Footer />
    </>
  )
}

export default App
