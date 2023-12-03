import Image from 'next/image'
import Link from 'next/link'

export default function PlayerPage() {
  return (
    <main>
      <div className="flex">
        <Link href="/component/team/zeta/player/dep">
          <Image
            // 自宅で画像を入れる
            src="/progamer-image/Dep.jpg"
            alt="Depさん宣材写真"
            width={200}
            height={300}
          />
          <h1 className="m-10 h-1 text-2xl text-center">Dep</h1>
        </Link>
        <Link href="/component/team/zeta/player/laz">
          <Image 
          src="/progamer-image/Laz.jpg"
          alt="Lazさん宣材写真"
          width={200}
          height={300}
          />
          <h2 className="m-10 h-1 text-2xl text-center">Laz</h2>
        </Link>
      </div>
    </main>
  )
}
