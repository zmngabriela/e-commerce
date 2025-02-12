import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import ScrollToTop from "./features/ScrollToTop"

import Router from "./routes"
import { configStore } from './store'

import { GlobalStyle } from "./styles"

const App = () => {
  const store = configStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
