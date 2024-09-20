import {configureStore} from '@reduxjs/toolkit'
import healthCareReducer from '../features/healthCareSlice'

export const store = configureStore({
    reducer:healthCareReducer
})