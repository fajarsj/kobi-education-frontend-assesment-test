import { render, screen, within } from '@testing-library/react'
import QuestionSubtitle from '@/components/typograhpy/QuestionSubtitle'

const defaultProps = {
  title: 'Lorem ipsum'
}

describe('QuestionSubtitle', () => {
  it('renders title correctly', () => {
    render(<QuestionSubtitle {...defaultProps} />)
    const questionSubtitle = screen.getByTestId('question-subtitle')

    expect(questionSubtitle).toBeInTheDocument()
    expect(within(questionSubtitle).getByText(/lorem ipsum/i)).toBeInTheDocument()
  })
})
