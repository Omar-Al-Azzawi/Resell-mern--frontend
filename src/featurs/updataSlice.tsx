import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    updataProduct: {
        id: '',
        name: '',
        price: '',
        description: '',
    }
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