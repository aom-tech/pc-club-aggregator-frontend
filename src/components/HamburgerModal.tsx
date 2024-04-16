import { Button } from '@/shared/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/shared/ui/sheet'

export default function HamburgerModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
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
      </SheetTrigger>
      <SheetContent cross={false}>
        <SheetHeader className="w-100%  flex-row-reverse justify-between border-b pb-2">
          <SheetClose asChild className="right-0">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </SheetClose>

          <Button variant={'default'} className="m-0 rounded-none">
            Войти
          </Button>
        </SheetHeader>

        <nav className="items-left ">
          <ul className="mt-10 flex flex-col gap-8">
            <SheetClose asChild>
              <li>
                <a className="text-h4" href="#">
                  Главная
                </a>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li>
                <a className="text-h4" href="#about">
                  О нас
                </a>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li>
                <a className="text-h4" href="#contact">
                  Контакты
                </a>
              </li>
            </SheetClose>
          </ul>
        </nav>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
