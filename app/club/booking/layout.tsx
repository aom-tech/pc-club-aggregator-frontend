import Hero from '@/entities/ui/Hero'
import { BookingProvider } from '@/shared/providers/BookingProvider'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Hero
        title="Беляево"
        description="Компьютерный клуб для требовательных игроков"
        src="/club-photo.webp"
      />
      <BookingProvider>{children}</BookingProvider>
    </>
  )
}
