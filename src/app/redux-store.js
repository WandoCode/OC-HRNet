import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/employee/employee.reducer'

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
})
