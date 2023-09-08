import { render, screen } from '@testing-library/react'
import Logo from '@/components/Logo'

describe('Header', () => {
  it('renders correctly', () => {
    render(<Logo />)
    const logo = screen.getByTestId('logo')

    expect(logo).toBeInTheDocument()
  })
})
