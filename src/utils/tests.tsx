import React, { PropsWithChildren } from "react"
import { Provider } from "react-redux";
import { render, RenderOptions } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

import { AppStore, configStore, RootState } from "../store";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>,
  store?: AppStore
}

export function renderWithProvider(
  element: React.ReactElement,
  {
    preloadedState = {},
    store = configStore(preloadedState),
    ...aditionalOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({children}: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
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
