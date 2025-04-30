import { combineReducers } from "@reduxjs/toolkit";

import admin from "./admin";
import form from "./form";

export default combineReducers({
  admin,
  form,
});
