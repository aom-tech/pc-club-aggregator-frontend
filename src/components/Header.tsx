import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HamburgerModal from './HamburgerModal'

export default function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between px-6 py-6 lg:static lg:py-3">
            <nav className="items-left ">
                <ul className="hidden flex-row gap-8 lg:flex">
                    <li>
                        <a className="text-h4" href="#">
                            Главная
                        </a>
                    </li>
                    <li>
                        <a className="text-h4" href="#about">
                            О нас
                        </a>
                    </li>
                    <li>
                        <a className="text-h4" href="#contact">
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
                <HamburgerModal />
            </div>
        </header>
    )
}
