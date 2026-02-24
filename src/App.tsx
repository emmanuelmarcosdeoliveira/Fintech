import Header from './components/header'
import SideNav from './components/sideNav'
import { DataContextProvider } from './context/data-context'
import Summary from './pages/summary'
import { GlobalStyles } from './styles/main'

export function App() {
  return (
    <>
      <GlobalStyles />
      <DataContextProvider>
        <Summary />
        <main>
          <SideNav />
          <Header />
        </main>
      </DataContextProvider>
    </>
  )
}
