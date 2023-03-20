import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    site_message: "یک پیغام داینامیک",
    status: ""
};


export const assignSiteMessage = createAsyncThunk(
    'ui/SetAppMessage',
    async (message, { rejectWithValue }) => {
        try {

        } catch (error) {
            return rejectWithValue(error.response.message)
        }
    }
);

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(assignSiteMessage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(assignSiteMessage.fulfilled, (state, action) => {
                state.status = 'idle';
            });
    },
});



export const selectAppMesseage = (state) => state.ui.site_message;


export default uiSlice.reducer;
