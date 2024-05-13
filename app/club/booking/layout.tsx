import Hero from '@/entity/ui/Hero'

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
      {children}
    </>
  )
}
