import Logo from "./ui/PCAggregator.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className='flex justify-between items-center py-3 px-6'>
            <nav className='items-left '>
                <ul className='flex gap-8 flex-row'>
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
            <div className='absolute -translate-x-2/4 left-2/4'>
                <Link href='/'>
                    <Image src={"/PCAggregator.svg"} alt='Logo' width={260} height={17} />
                </Link>
            </div>
            <div className='flex items-right'>
                <Button variant={"outline"} className='hover:bg-black hover:text-white'>Войти</Button>
            </div>
        </header>
    );
}
