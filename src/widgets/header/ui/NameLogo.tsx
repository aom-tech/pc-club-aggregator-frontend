'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NameLogo = () => {
  const router = usePathname()
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="left lg:absolute lg:left-2/4 lg:mt-auto lg:-translate-x-2/4">
      <Link onClick={handleClick} href={router}>
        <span
          className="font-bicubik text-logo"
          style={{ WebkitTextStroke: '2px' }}
        >
          PC Aggregator
        </span>
      </Link>
    </div>
  )
}

export default NameLogo
