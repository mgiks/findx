import { render, screen } from '@testing-library/react'
import SearchBar from './SearchBar.tsx'
import userEvent from '@testing-library/user-event'

describe('SearchBar', async () => {
  it('should be in the document', async () => {
    const { findByTestId } = render(<SearchBar />)
    const inputField = await findByTestId('input-field')
    const searchBar = await screen.findByTestId('search-bar')

    expect(searchBar).toBeInTheDocument()
    expect(inputField).toHaveAttribute('type', 'text')
  })

  it('should accept user input', async () => {
    const { findByTestId } = render(<SearchBar />)
    const inputField = await findByTestId('input-field')
    const user = userEvent.setup()

    await user.type(inputField, 'test input')

    expect(inputField).toHaveValue('test input')
  })
})
