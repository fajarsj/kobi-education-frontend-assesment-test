interface SectionDividerProps {
  title: string
  subtitle: string
}

const SectionDivider = ({ title, subtitle }: SectionDividerProps) => {
  return (
    <div className="bg-[#064C85] rounded px-8 py-3 flex items-center gap-2 w-full" data-testid="section-divider">
      <h5 className="text-base font-semibold leading-5 text-[#FAFAFA]" data-testid="section-divider-title">
        {title}
      </h5>
      <h6 className="text-base font-medium leading-6 text-[#FAFAFA]">{subtitle}</h6>
    </div>
  )
}

export default SectionDivider
