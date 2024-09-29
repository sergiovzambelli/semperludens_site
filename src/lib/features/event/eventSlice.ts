import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface eventState {
  event_id: string;
  game_id: string;
}

const initialState: eventState = {
  event_id: "",
  game_id: "",
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventId: (state, action: PayloadAction<string>) => {
      state.event_id = action.payload;
    },
    setGameId: (state, action: PayloadAction<string>) => {
      state.game_id = action.payload;
    },
  },
});

export const { setEventId, setGameId } = eventSlice.actions;

export default eventSlice.reducer;