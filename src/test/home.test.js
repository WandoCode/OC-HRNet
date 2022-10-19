import { cleanup, screen, render, fireEvent } from '@testing-library/react'
import Home from '../pages/Home'

afterEach(cleanup)

describe('When I am on Home page', () => {
  test('Then I should see the form', () => {
    render(<Home />)

    expect(screen.getByLabelText('First Name')).toBeTruthy()
    expect(screen.getByLabelText('Last Name')).toBeTruthy()
    expect(screen.getByLabelText('Zip Code')).toBeTruthy()
    expect(screen.getByLabelText('Street')).toBeTruthy()
    expect(screen.getByLabelText('City')).toBeTruthy()
    expect(screen.getByLabelText('State')).toBeTruthy()
    expect(screen.getByLabelText('Department')).toBeTruthy()
    expect(screen.getByLabelText('Date of Birth')).toBeTruthy()
    expect(screen.getByLabelText('Start Date')).toBeTruthy()
  })
})
