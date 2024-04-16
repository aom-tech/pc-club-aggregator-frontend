import Contact from './Contact'

const ClubDescription: React.FC = () => {
  // This is just for prototype example
  const loremText1 =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras  pulvinar mattis nunc sed blandit libero volutpat. Mi sit amet mauris  commodo quis imperdiet massa tincidunt nunc. Orci ac auctor augue mauris  augue. '
  const loremText2 =
    'Tellus in hac habitasse platea dictumst vestibulum. Urna  molestie at elementum eu facilisis sed odio. Rhoncus dolor purus non  enim praesent elementum. Pretium aenean pharetra magna ac placerat  vestibulum lectus mauris. Velit scelerisque in dictum non consectetur a.  Amet nisl suscipit adipiscing bibendum. Nec nam aliquam sem et tortor  consequat id.'

  return (
    <>
      <article className="flex w-full flex-col gap-5">
        <h1 className="font-bicubik text-h2 lg:text-h1">Описание</h1>
        <p className="whitespace-pre-wrap text-h5 lg:text-p">
          {loremText1 + '\n\n' + loremText2}
        </p>
      </article>
      <article className="flex w-full flex-col gap-5">
        <h1 className="font-bicubik text-h2 lg:text-h1">Контакты</h1>
        <div className="flex flex-col gap-2">
          <Contact
            href="https://telegram.org"
            src="/phone.svg"
            width={24}
            height={24}
            text="+7 (987) 654 3210"
          />
          <Contact
            href="https://telegram.org"
            src="/tg-logo-trans.svg"
            width={24}
            height={24}
            text="Telegram"
          />
          <Contact
            href="https://vk.com"
            src="/vk-logo-trans.svg"
            width={24}
            height={24}
            text="Vkontakte"
          />
          <Contact
            href="https://whatsapp.com"
            src="/wa-logo-trans.svg"
            width={24}
            height={24}
            text="WhatsApp"
          />
        </div>
      </article>
    </>
  )
}

export default ClubDescription
