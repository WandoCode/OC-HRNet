import { cleanup, screen, render, fireEvent } from '@testing-library/react'
import Home from '../pages/Home'

afterEach(cleanup)

describe('When I am on Home page', () => {
  test('Then I should see the form', () => {
    render(<Home />)

    expect(screen.getByRole('button', { name: 'Save' })).toBeTruthy()

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

  describe('When I click the "Save" button', () => {
    test('Then it should display the modal', () => {
      render(<Home />)
      const saveBtn = screen.getByRole('button', { name: 'Save' })

      fireEvent.click(saveBtn)

      expect(screen.getByText('Employee Created!')).toBeTruthy()
    })
  })

  describe('When the modale is open and click to close it', () => {
    test('Then it should close the modale', () => {
      render(<Home />)
      const saveBtn = screen.getByRole('button', { name: 'Save' })
      fireEvent.click(saveBtn)
      const closeBtn = screen.getByAltText('Close button')

      fireEvent.click(closeBtn)

      expect(screen.queryByText('Employee Created!')).not.toBeTruthy()
    })
  })
})
