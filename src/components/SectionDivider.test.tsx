import { render, screen, within } from '@testing-library/react'
import SectionDivider from '@/components/SectionDivider'

const defaultProps = {
  title: 'Lorem ipsum',
  subtitle: 'Lorem ipsum'
}

describe('SectionDivider', () => {
  it('renders correctly', () => {
    render(<SectionDivider {...defaultProps} />)
    const submitAssignment = screen.getByTestId('section-divider')
    const submitAssignmenTitle = screen.getByTestId('section-divider-title')

    expect(submitAssignment).toBeInTheDocument()
    expect(within(submitAssignmenTitle).getByText(/lorem ipsum/i)).toBeInTheDocument()
  })
})
