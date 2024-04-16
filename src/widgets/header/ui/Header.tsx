import { Button } from '@/shared/ui/button'
import HamburgerModal from './HamburgerModal'
import NameLogo from './NameLogo'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-background/90 px-6 py-6 lg:static lg:py-3">
      <nav className="items-left hidden lg:flex">
        <ul className="flex flex-row gap-8">
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
      <div className="hidden lg:flex">
        <Button variant={'default'} className="rounded-none">
          Войти
        </Button>
      </div>
      <div className="lg:hidden">
        <HamburgerModal />
      </div>
    </header>
  )
}
