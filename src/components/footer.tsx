import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
            <footer className='mt-auto py-10 px-12 w-100vw text-white flex flex-col items-center justify-between gap-8 sm:gap-auto sm:flex-row sm:items-center sm:justify-between'>

                <Link href='/'>
                    <Image
                        src={"/pcca-logo.svg"}
                        alt='Logo'
                        width={100}
                        height={100}
                    />
                </Link>

            <div className='flex flex-row items-top justify-center gap-16'>
                <div className='hidden lg:flex flex-col items-start justify-start gap-1'>
                    <p className=' text-lg font-semibold'>Контакты</p>
                    <Link
                        href='https://telegram.org'
                        className='  text-white  flex flex-row items-center gap-2'
                    >
                        <Image
                            src={"/tg-logo.svg"}
                            alt='Logo'
                            width={13}
                            height={13}
                        />
                        <span className='opacity-40'>Телеграм</span>
                    </Link>
                    <Link
                        href='https://vk.com'
                        className='  text-white flex flex-row items-center gap-2'
                    >
                        <Image
                            src={"/vk-logo.svg"}
                            alt='Logo'
                            width={13}
                            height={11}
                        />
                        <span className='opacity-40'>Вконтакте</span>
                    </Link>
                    <Link
                        href='https://whatsapp.com'
                        className='  text-white flex flex-row items-center gap-2'
                    >
                        <Image
                            src={"/wa-logo.svg"}
                            alt='Logo'
                            width={13}
                            height={11}
                        />
                        <span className='opacity-40'>WhatsApp</span>
                    </Link>
                </div>
                <div className='hidden lg:flex flex-col items-start justify-start max-w-[27.75rem] gap-1'>
                    <p className=' text-lg font-semibold'>О нас</p>
                    <p className=' text-white opacity-40'>
                        Присоединяйтесь к нам и окунитесь в захватывающий мир
                        игр и технологий вместе с нашим комьюнити компьютерных
                        энтузиастов!
                    </p>
                </div>
                <div className='flex flex-col items-center sm:items-start justify-start gap-1'>
                    <p className='hidden lg:flex text-lg font-semibold '>
                        Информация
                    </p>
                    <Link
                        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        className=' text-white opacity-40 underline'
                    >
                        Политика конфиденциальности
                    </Link>
                    <Link
                        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        className=' text-white opacity-40 underline'
                    >
                        Условия использования
                    </Link>
                </div>
            </div>
        </footer>
    );
}
