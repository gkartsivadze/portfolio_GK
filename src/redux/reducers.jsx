import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const loadedImagesCounterSlice = createSlice({
    name: 'loadedImages',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        refresh: (state) => {
            state.value = 0
        }
    },
})

export const { increment, refresh } = loadedImagesCounterSlice.actions
export default loadedImagesCounterSlice.reducer;