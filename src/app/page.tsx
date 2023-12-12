import Image from 'next/image'
import Link from 'next/link'
import supabase from '../../utils/supabase'
import DeviceReview from './component/devicereview'
import { User } from './context/user'

export default async function Home() {
  // const { data, error } = await supabase.from('users').select()
  // const { error } = await supabase.from('tests').insert({
  //   id: 1234578,
  //   text: 'test',
  // })
  // console.log(error)

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
          <p>マウス</p>
        </Link>
        <Link href="/component/keyboard">
          <Image
            src="/device-image/keyboard.png"
            width={200}
            height={200}
            alt="キーボードのイメージ画像です"
          />
          <p className="m-3">キーボード</p>
        </Link>
        <p>ディスプレイ</p>
      </div>
      <div>
      </div>
    </main>
  )
}
