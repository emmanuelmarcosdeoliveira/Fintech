import Header from './components/header'
import SideNav from './components/sideNav'
import Summary from './pages/summary'
import { GlobalStyles } from './styled/styled'

export function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Summary />
        <main>
          <SideNav />
          <Header />
        </main>
      </div>
    </>
  )
}
