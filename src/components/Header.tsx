
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HamburgerModal from './HamburgerModal'
import NameLogo from './NameLogo'

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
      <NameLogo />
      <div className="items-right hidden lg:flex">
        <Button variant={'default'} className='rounded-none'>Войти</Button>
      </div>
      <div className="lg:hidden">
        <HamburgerModal />
      </div>
    </header>
  )
}
