import { combineReducers, configureStore } from "@reduxjs/toolkit"

import cartReducer from "./reducers/cart"
import filterReducer from "./reducers/filter"
import favoriteReducer from "./reducers/favorites"
import alertReducer from "./reducers/alert"
import newsletterReducer from "./reducers/newsletterMock"
import authReducer from "./reducers/auth"
import orderReducer from "./reducers/ordersMock"

import api from "../services/api";

const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer,
  favorites: favoriteReducer,
  alert: alertReducer,
  newsletter: newsletterReducer,
  auth: authReducer,
  orders: orderReducer,
  [api.reducerPath]: api.reducer
}
)

export function configStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configStore>
export type AppDispatch = ReturnType<typeof configStore>['dispatch']
