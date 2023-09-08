import { render, screen, within } from '@testing-library/react'
import QuestionTitle from '@/components/typograhpy/QuestionTitle'

describe('QuestionTitle', () => {
  it('renders title correctly', () => {
    render(<QuestionTitle title="Lorem Ipsum" />)
    const questionTitle = screen.getByTestId('question-title')

    expect(questionTitle).toBeInTheDocument()
    expect(within(questionTitle).getByText(/lorem ipsum/i)).toBeInTheDocument()
  })
})
