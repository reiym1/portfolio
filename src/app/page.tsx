import Image from 'next/image'
import Link from 'next/link'
import ProGamer from './component/progamer/page'
// import ProgamerPage from './component/progamer'

export default function Home() {
  return (
    <main>

      <div className="m-10 h-1 text-2xl text-center text-green-600">
        <h1>推し活をはかどらせよう！</h1>
      </div>
        {/* <ProGamer />
        <review /> */}
        <div className='flex justify-center gap-8'>
        <Link href="/component/progamer" className="">
        <Image 
        src="/progamer-image/freepro.png" 
        width={130}
        height={150}
        alt="プロゲーマー一覧のイメージ画像" />
        <p className=''>プロゲーマー</p> 
        {/* <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
        <p className="text-white absolute left-4 bottom-2">プロゲーマー</p>
        </div> */}
        </Link>
        {/* </div>
      <div className='flex justify-center'> */}
        <Link href="/component/streamer">
          <Image
          src="/streamer-image/freest1.png"
          width={150}
          height={250}
          alt='配信者一覧イメージ画像' />
          <p>配信者</p>
        </Link>
      </div>
    <div className='flex justify-center m-10 gap-8'>
    <h2>デバイス</h2>
    </div>
    <div className='flex justify-center m-10 gap-8'>
    <Link 
    href="/component/mouse"
    >
    <Image
    src="/device-image/mouce.png"
    width={150}
    height={250}
    alt='ゲーミングマウスのイメージ画像です'
    />
    <p>マウス</p>
    </Link>
    <p>キーボード</p>
    <p>ディスプレイ</p>
    </div>
    </main>
  )
}
