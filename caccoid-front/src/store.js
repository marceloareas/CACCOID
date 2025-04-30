import { configureStore } from "@reduxjs/toolkit";

import reducer from "./ducks/reducer";

export const store = configureStore({
  reducer,
});
