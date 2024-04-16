interface AvailablePlacesProps {
  title: string
  text: string
}

const AvailablePlaces: React.FC<AvailablePlacesProps> = ({ title, text }) => {
  return (
    <div className="text-extrasmall flex w-full flex-col items-end gap-[10px] bg-white/20 p-5 font-bicubik sm:text-[14px]/[32px] lg:text-[20px]/[48px]">
      <span>{title}</span>
      <span>{text}</span>
    </div>
  )
}

export default AvailablePlaces
