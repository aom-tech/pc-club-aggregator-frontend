import Logo from "./ui/PCAggregator.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className='sticky top-0 lg:static flex justify-between items-center py-4 lg:py-3 px-6'>
            <nav className='items-left '>
                <ul className='hidden lg:flex gap-8 flex-row'>
                    <li>
                        <a
                            className='text-base font-regular text-white'
                            href='#'
                        >
                            Главная
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-base font-regular text-white'
                            href='#about'
                        >
                            О нас
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-base font-regular text-white'
                            href='#contact'
                        >
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>
            <div className='left lg:mt-auto lg:absolute lg:-translate-x-2/4 lg:left-2/4'>
                <Link href='/#'>
                    <Image src={"/PCAggregator.svg"} alt='Logo' width={260} height={17} />
                </Link>
            </div>
            <div className='hidden lg:flex items-right'>
                <Button variant={"outline"} className='hover:bg-black hover:text-white'>Войти</Button>
            </div>
            <div className='lg:hidden'>
                <button className='text-white'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16m-7 6h7'
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
}
