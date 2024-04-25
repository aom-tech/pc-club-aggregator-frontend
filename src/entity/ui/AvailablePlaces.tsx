interface AvailablePlacesProps {
  title: string
  text: string
  className?: string
}

const AvailablePlaces: React.FC<AvailablePlacesProps> = ({
  title,
  text,
  className = 'lg:text-md/[48px] sm:text-3xs text-4xs flex w-full flex-col items-end gap-[10px] bg-white/20 p-5 font-bicubik',
}) => {
  return (
    <div className={className}>
      <span>{title}</span>
      <span>{text}</span>
    </div>
  )
}

export default AvailablePlaces
