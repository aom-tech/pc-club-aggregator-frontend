import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="w-100vw sm:gap-auto mt-auto flex flex-col items-center justify-between gap-8 px-12 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/">
                <Image
                    src={'/pca-logo.svg'}
                    alt="Logo"
                    width={100}
                    height={100}
                />
            </Link>

            <div className="items-top flex flex-row justify-center gap-16">
                <div className="hidden flex-col items-start justify-start gap-1 lg:flex">
                    <p className=" text-lg font-semibold">Контакты</p>
                    <Link
                        href="https://telegram.org"
                        className="  flex  flex-row items-center gap-2 "
                    >
                        <Image
                            src={'/tg-logo.svg'}
                            alt="Logo"
                            width={13}
                            height={13}
                        />
                        <span className="text-detail">Телеграм</span>
                    </Link>
                    <Link
                        href="https://vk.com"
                        className="  flex flex-row items-center gap-2 "
                    >
                        <Image
                            src={'/vk-logo.svg'}
                            alt="Logo"
                            width={13}
                            height={11}
                        />
                        <span className="text-detail">Вконтакте</span>
                    </Link>
                    <Link
                        href="https://whatsapp.com"
                        className="  flex flex-row items-center gap-2"
                    >
                        <Image
                            src={'/wa-logo.svg'}
                            alt="Logo"
                            width={13}
                            height={11}
                        />
                        <span className="text-detail">WhatsApp</span>
                    </Link>
                </div>
                <div className="hidden max-w-[27.75rem] flex-col items-start justify-start gap-1 lg:flex">
                    <p className=" text-lg font-semibold">О нас</p>
                    <p className="text-detail">
                        Присоединяйтесь к нам и окунитесь в захватывающий мир
                        игр и технологий вместе с нашим комьюнити компьютерных
                        энтузиастов!
                    </p>
                </div>
                <div className="flex flex-col items-center justify-start gap-1 sm:items-start">
                    <p className="hidden text-lg font-semibold lg:flex ">
                        Информация
                    </p>
                    <Link
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className=" text-detail underline"
                    >
                        Политика конфиденциальности
                    </Link>
                    <Link
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className=" text-detail underline"
                    >
                        Условия использования
                    </Link>
                </div>
            </div>
        </footer>
    )
}
