import Image from 'next/image'
import Link from 'next/link'
import ProGamer from './_component/progamer/page'

export default function Home() {
  return (
    <main>
      <div className="m-10 h-1 text-2xl text-center text-green-600">
        <h1>推し活をはかどらせよう！</h1>
      </div>
        {/* <ProGamer />
        <review /> */}
        <div className='flex justify-center relative"'>
        <Link href="/_component/progamer/page" className="">
        <Image 
        src="/progamer-image/freepro.png" 
        width={200}
        height={250}
        alt="プロゲーマー一覧のイメージ画像" />
        <p className=''>プロゲーマー</p> 
        {/* <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
        <p className="text-white absolute left-4 bottom-2">プロゲーマー</p>
        </div> */}
        </Link>
        </div>
      <div className='flex'>
        <Link href="/streamer/page">
          <Image
          src="/streamer-image/freest1.png"
          width={200}
          height={250}
          alt='配信者一覧イメージ画像' />
          <p>配信者</p>
        </Link>
      </div>
    </main>
  )
}
