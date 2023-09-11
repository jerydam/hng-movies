import Image from 'next/image'
import Header from './component/header'
import Hero from './component/hero'
export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Hero movie={null} />
    </main>
  )
}
