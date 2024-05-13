import Image from 'next/image'

const ClubLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
      <h1 className="font-bicubik text-xl lg:text-2xl">Схема клуба</h1>
      <div className='border p-2'>
        <Image
          width={1300}
          height={1300}
          src="/map_belyaevo.svg"
          alt="Схема клуба"
          />
          </div>
      </div>
    </>
  )
}

export default ClubLayout
