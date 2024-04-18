import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

interface ContactProps extends Omit<ImageProps, 'alt'> {
  text: string
  href: string
}

const Contact: React.FC<ContactProps> = ({ text, href, ...props }) => {
  return (
    <Link href={href} className="flex gap-[10px]">
      <Image {...props} alt={text} />
      <span className="text-small">{text}</span>
    </Link>
  )
}

export default Contact
