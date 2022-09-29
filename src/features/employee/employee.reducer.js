import { createReducer } from '@reduxjs/toolkit'
import { create } from './employee.actions'
const initialState = {
  id: null,
  firstName: undefined,
  lastName: undefined,
  birthDate: undefined,
  starteDate: undefined,
  department: undefined,
  address: {
    street: undefined,
    city: undefined,
    State: undefined,
    zipCode: null,
  },
}

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(create, (state, action) => {
    console.log(action.payload)
  })
})

export default employeeReducer
