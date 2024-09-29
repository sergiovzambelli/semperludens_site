import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/player/playerSlice'
import eventReducer from './features/event/eventSlice'

// Create a store instance per-request
export const makeStore = () => {
  return configureStore({
    reducer: {
      player: playerReducer,
      event: eventReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']