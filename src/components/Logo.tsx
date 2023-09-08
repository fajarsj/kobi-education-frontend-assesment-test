import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      width="110"
      height="50"
      alt="Kobi Logo"
      priority
      className="w-auto h-auto"
      data-testid="logo"
    />
  )
}

export default Logo
