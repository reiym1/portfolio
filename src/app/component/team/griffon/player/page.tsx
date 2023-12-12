import Image from 'next/image'
import Link from 'next/link'

export default function PlayerPage() {
return (
    <main>
    <div className="flex">
        <Link href="/component/team/griffon/player/eagle">
        <Image
            // 自宅で画像を入れる
            src="/progamer-image/eagleman.png"
            alt="Eagle宣材写真"
            width={200}
            height={300}
        />
        <h1 className="mt-6 text-2xl text-center">Eagle</h1>
        </Link>
        <Link href="/component/team/griffon/player/reaper">
        <Image 
        src="/progamer-image/reaperman.png" 
        alt="Reaper宣材写真"
        width={220}
        height={300}
        />
        <h2 className="mt-6 text-2xl text-center">Reaper</h2>
        </Link>
        <Link href="/component/team/griffon/player/lion">
        <Image 
        src="/progamer-image/lionman.png" 
        alt="Lion宣材写真"
        width={180}
        height={300}
        />
        <h2 className="mt-5 text-2xl text-center">Lion</h2>
        </Link>
    </div>
    </main>
)
}