import { createAction } from '@reduxjs/toolkit'

const create = createAction('employee/create', (formData) => ({
  payload: { formData },
}))

export { create }
