import { cleanup, screen, render, fireEvent } from '@testing-library/react'
import Home from '../pages/Home'
import Modale from '../components/Modale'

afterEach(cleanup)

describe('When I am on Home page with modale open', () => {
  test('Modale should be visible', () => {
    render(<Modale />)

    expect(screen.getByText('Employee Created!')).toBeTruthy()
  })

  describe('When I click to close the modale', () => {
    test('Then the cb fct should be called', () => {
      const closeFct = jest.fn()
      render(<Modale hideModale={closeFct} />)
      const closeBtn = screen.getByAltText('Close button')

      fireEvent.click(closeBtn)
      expect(closeFct).toHaveBeenCalled()
    })
  })
})
