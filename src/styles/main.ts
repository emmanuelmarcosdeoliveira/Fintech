import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  body {
  font-family: sans-serif;
  font-size: 1.5rem;
  background: #f9f9f9;
  }
`

export { GlobalStyles }
