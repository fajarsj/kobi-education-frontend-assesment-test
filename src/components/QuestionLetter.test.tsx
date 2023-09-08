import { render, screen, within } from '@testing-library/react'
import QuestionLetter from '@/components/QuestionLetter'

const defaultProps = {
  title: 'Lorem ipsum',
  character: 'A'
}

describe('QuestionLetter', () => {
  it('renders correctly', () => {
    render(<QuestionLetter {...defaultProps} />)
    const questionLetter = screen.getByTestId('question-letter')
    const questionLetterTitle = screen.getByTestId('question-letter-title')
    const questionLetterCharacter = screen.getByTestId('question-letter-character')

    expect(questionLetter).toBeInTheDocument()
    expect(within(questionLetterTitle).getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(within(questionLetterCharacter).getByText(/a/i)).toBeInTheDocument()
  })
})
