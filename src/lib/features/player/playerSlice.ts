import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface playerState {
  name: string;
  surname: string;
  email: string;
}

const initialState: playerState = {
  name: "Giorgio",
  surname: "",
  email: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setSurname, setEmail } = playerSlice.actions;

export default playerSlice.reducer;