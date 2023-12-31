import Image from 'next/image'
import Link from 'next/link'
import { User } from './context/user'

export default async function Home() {
  return (
    <main>
      <User/>
      <div className="m-10 h-1 text-2xl text-center text-green-600">
        <h1>推し活をはかどらせよう！</h1>
      </div>
      <div className="flex justify-center gap-8">
        <Link href="/component/progamer" className="">
          <Image
            src="/progamer-image/freepro.png"
            width={200}
            height={250}
            alt="プロゲーマー一覧のイメージ画像"
          />
          <p className="">プロゲーマー</p>
        </Link>
        <Link href="/component/streamer">
          <Image
            src="/streamer-image/freest1.png"
            width={235}
            height={270}
            alt="配信者一覧イメージ画像"
          />
          <p>配信者</p>
        </Link>
      </div>
      <div className="flex justify-center m-10 gap-8">
        <h2>デバイス</h2>
      </div>
      <div className="flex justify-center m-10 gap-8">
        <Link href="/component/mouse">
          <Image
            src="/device-image/mouse.png"
            width={150}
            height={250}
            alt="ゲーミングマウスのイメージ画像です"
          />
          <p className="mt-1 h-1">マウス</p>
        </Link>
        <Link href="/component/keyboard">
          <Image
            src="/device-image/keyboard.png"
            width={200}
            height={200}
            alt="キーボードのイメージ画像です"
          />
          <p className="mt-4 h-1">キーボード</p>
        </Link>
        <Link href="/component/keyboard">
          <Image
            src="/device-image/monitor.png"
            width={150}
            height={200}
            alt="モニターのイメージ画像です"
          />
          <p className="mt-6 h-1">モニター</p>
        </Link>
      </div>
      <div>
      </div>
    </main>
  )
}
