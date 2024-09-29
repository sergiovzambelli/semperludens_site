import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface playerState {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

const initialState: playerState = {
  name: "DEFAULT",
  surname: "DEFAULT",
  email: "DEFAULT",
  phone: "DEFAULT",
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
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPlayerData: (state, action: PayloadAction<playerState>) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

export const { setName, setSurname, setEmail, setPhone, setPlayerData } =
  playerSlice.actions;

export default playerSlice.reducer;
