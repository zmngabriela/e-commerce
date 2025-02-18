import React, { PropsWithChildren } from "react"
import { Provider } from "react-redux";
import { render, RenderOptions } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, MemoryRouterProps } from "react-router-dom";

import { AppStore, configStore, RootState } from "../store";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
  useMemoryRouter?: boolean
  memoryRouterProps?: MemoryRouterProps
}

export function renderWithProvider(
  element: React.ReactElement,
  {
    preloadedState = {},
    store = configStore(preloadedState),
    useMemoryRouter = false,
    memoryRouterProps = {},
    ...aditionalOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({children}: PropsWithChildren): JSX.Element {
    const Router = useMemoryRouter ? MemoryRouter : BrowserRouter
    return (
      <Provider store={store}>
        <Router {...memoryRouterProps}>
          {children}
        </Router>
      </Provider>
    )
  }

  return {
    store,
    ...render(element, {
      wrapper: Wrapper,
      ...aditionalOptions
    })
  }
}
