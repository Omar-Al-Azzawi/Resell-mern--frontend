import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    updataProduct: String
}

const updataSlice = createSlice({
    name: 'updata',
    initialState,
    reducers: {
        updata: (state, action) => {
            state.updataProduct = action.payload
          }
    }
})

export const { updata } = updataSlice.actions
export default updataSlice.reducer