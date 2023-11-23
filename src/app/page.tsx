import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="m-10 h-1 text-2xl text-center text-green-600">
        <h1>推し活をはかどらせよう！</h1>
        {/* <progamer />
        <stremer />
        <review /> */}
        <Link href="progamer" className="">
          tset
        </Link>
      </div>
    </main>
  )
}
