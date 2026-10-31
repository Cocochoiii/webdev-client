// The hello slice only keeps a message
import { createSlice } from "@reduxjs/toolkit";
const helloSlice = createSlice({
  name: "hello",
  initialState: { message: "Hello Redux" },
  reducers: {},
});
export default helloSlice.reducer;
