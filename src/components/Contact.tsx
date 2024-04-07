import Image, { ImageProps } from 'next/image'

interface ContactProps extends ImageProps {
  text: string
}

const Contact: React.FC<ContactProps> = ({ text, ...props }) => {
  return (
    <div className="flex gap-[10px]">
      <Image {...props} />
      <span className="text-small">{text}</span>
    </div>
  )
}

export default Contact
