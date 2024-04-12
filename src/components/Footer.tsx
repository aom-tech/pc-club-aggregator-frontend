import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: 'https://telegram.org', icon: '/tg-logo.svg', text: 'Телеграм' },
  { href: 'https://vk.com', icon: '/vk-logo.svg', text: 'Вконтакте' },
  { href: 'https://whatsapp.com', icon: '/wa-logo.svg', text: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="w-100vw sm:gap-auto mt-auto flex flex-col items-center justify-between gap-8 px-12 py-10 sm:flex-row sm:items-center sm:justify-between">
      <Link href="/">
        <Image src={'/pca-logo.svg'} alt="Logo" width={100} height={100} />
      </Link>

      <div className="items-top flex flex-row justify-center gap-16">
        <div className="hidden flex-col items-start justify-start gap-1 lg:flex">
          <p className="text-lg font-semibold">Контакты</p>
          {links.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className="flex flex-row items-center gap-2"
                target="_blank"
              >
                <Image src={link.icon} alt="Logo" width={13} height={13} />
                <span className="text-detail">{link.text}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden max-w-[27.75rem] flex-col items-start justify-start gap-1 lg:flex">
          <p className="text-lg font-semibold">О нас</p>
          <p className="text-detail">
            Присоединяйтесь к нам и окунитесь в захватывающий мир игр и
            технологий вместе с нашим комьюнити компьютерных энтузиастов!
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-1 sm:items-start">
          <p className="hidden text-lg font-semibold lg:flex">Информация</p>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="text-detail underline"
          >
            Политика конфиденциальности
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="text-detail underline"
          >
            Условия использования
          </Link>
        </div>
      </div>
    </footer>
  )
}
