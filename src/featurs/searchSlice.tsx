import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
    searchResult: [],
    searchLoading: false,
    searchError: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { setSearch } = searchSlice.actions
export default searchSlice.reducer