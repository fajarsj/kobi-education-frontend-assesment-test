interface QuestionTitleProps {
  title: string
  italic?: boolean
}

const QuestionTitle = ({ title, italic }: QuestionTitleProps) => {
  return (
    <p
      className={`text-[#505050] text-base leading-6 ${italic && 'italic'} font-semibold`}
      data-testid="question-title"
    >
      {title}
    </p>
  )
}

export default QuestionTitle
