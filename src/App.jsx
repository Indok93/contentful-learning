
import './App.scss'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { ButtonTop } from './Components/ButtonTop/ButtonTop'

function App() {

  return (
    <>
      <Header />

      <Main>
        <AppRouter />
      </Main>
      
      <Footer />
      <ButtonTop />
    </>
  )
}

export default App
