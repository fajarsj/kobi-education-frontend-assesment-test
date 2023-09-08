import { render, screen } from '@testing-library/react'
import QuestionStatus from '@/components/QuestionStatus'

describe('QuestionStatus', () => {
  it('renders correctly', () => {
    render(<QuestionStatus />)
    const questionStatus = screen.getByTestId('question-status')

    expect(questionStatus).toBeInTheDocument()
  })
})
