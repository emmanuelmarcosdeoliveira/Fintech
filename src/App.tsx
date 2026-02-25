import Header from './components/header'
import SideNav from './components/sideNav'
import { DataContextProvider } from './context/data-context'
import Summary from './pages/summary'
import { Container } from './styles'
export function App() {
  return (
    <DataContextProvider>
      <Container>
        <SideNav />
        <main>
          <Header />
          <Summary />
        </main>
      </Container>
    </DataContextProvider>
  )
}
