interface randomNumberUtilsProps {
  min: number
  max: number
}

export const randomNumberUtils = ({ min, max }: randomNumberUtilsProps) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
