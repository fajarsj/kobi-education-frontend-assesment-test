import { render, screen, within } from '@testing-library/react'
import QuestionSelect from '@/components/QuestionSelect'

const defaultProps = {
  title: 'Lorem ipsum',
  options: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig']
}

describe('QuestionSelect', () => {
  it('renders correctly', () => {
    render(<QuestionSelect {...defaultProps} />)
    const questionSelect = screen.getByTestId('question-select')
    const questionSelectTitle = screen.getByTestId('question-select-title')

    expect(questionSelect).toBeInTheDocument()
    expect(within(questionSelectTitle).getByText(/lorem ipsum/i)).toBeInTheDocument()
  })
})
