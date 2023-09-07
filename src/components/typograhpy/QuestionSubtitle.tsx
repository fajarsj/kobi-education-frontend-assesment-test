interface QuestionTitleProps {
  title: string
  italic?: boolean
}

const QuestionSubtitle = ({ title, italic }: QuestionTitleProps) => {
  return <p className={`text-base leading-6 font-normal ${italic && 'italic'} max-w-[650px]`}>{title}</p>
}

export default QuestionSubtitle
