import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Router from "./routes";
import { configStore } from './store'

import { GlobalStyle } from "./styles";

const App = () => {
  const store = configStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
