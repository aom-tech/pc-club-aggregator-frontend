import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between px-6 py-4 lg:static lg:py-3">
            <nav className="items-left ">
                <ul className="hidden flex-row gap-8 lg:flex">
                    <li>
                        <a className="font-regular text-base" href="#">
                            Главная
                        </a>
                    </li>
                    <li>
                        <a className="font-regular text-base" href="#about">
                            О нас
                        </a>
                    </li>
                    <li>
                        <a className="font-regular text-base" href="#contact">
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="left lg:absolute lg:left-2/4 lg:mt-auto lg:-translate-x-2/4">
                <Link href="/#">
                    <span className="font-bicubik text-logo">PCAggregator</span>
                    
                </Link>
            </div>
            <div className="items-right hidden lg:flex">
                <Button variant={'default'}>Войти</Button>
            </div>
            <div className="lg:hidden">
                <Button size="icon" variant="ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </Button>
            </div>
        </header>
    )
}
