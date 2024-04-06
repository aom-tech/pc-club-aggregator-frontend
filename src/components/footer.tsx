import Link from "next/link";
import Image from "next/image";



export default function Footer() {
    return (
        <footer className='mt-auto py-10 px-12 w-100vw bg-black text-white flex flex-row items-center justify-between gap-auto'>
            <div className=''>
                <Link href='/'>
                    <Image src={"/pcca-logo.svg"} alt='Logo' width={100} height={100} />
                </Link>
            </div>
            <div className='flex flex-row items-top justify-center gap-16'>
                <div className='flex flex-col items-start justify-start gap-1'>
                    <p className=' text-lg font-semibold'>Контакты</p>
                    <Link
                        href='https://telegram.org'
                        className='  text-white opacity-40 flex flex-row items-center gap-2'
                    >
                        <Image src={"/tg-logo.svg"} alt='Logo' width={13} height={13} />
                        Телеграм
                    </Link>
                    <Link
                        href='https://vk.com'
                        className='  text-white opacity-40 flex flex-row items-center gap-2'
                    >
                        <Image src={"/vk-logo.svg"} alt='Logo' width={13} height={11} />
                        Вконтакте
                    </Link>
                    <Link
                        href='https://whatsapp.com'
                        className='  text-white opacity-40 flex flex-row items-center gap-2'
                    >
                        <Image src={"/wa-logo.svg"} alt='Logo' width={13} height={11} />
                        WhatsApp
                    </Link>
                </div>
                <div className='flex flex-col items-start justify-start max-w-[27.75rem] gap-1'>
                    <p className=' text-lg font-semibold'>О нас</p>
                    <p className=' text-white opacity-40'>
                        Присоединяйтесь к нам и окунитесь в захватывающий мир
                        игр и технологий вместе с нашим комьюнити компьютерных
                        энтузиастов!
                    </p>
                </div>
                <div className='flex flex-col items-start justify-start gap-1'>
                    <p className=' text-lg font-semibold'>Информация</p>
                    <Link
                        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        className=' text-white opacity-40 border-b border-slate-400'
                    >
                        Политика конфиденциальности
                    </Link>
                    <Link
                        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        className=' text-white opacity-40 border-b border-slate-400'
                    >
                        Условия использования
                    </Link>
                </div>
            </div>
        </footer>
    );
}
