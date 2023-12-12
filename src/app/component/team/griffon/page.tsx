import Image from 'next/image'
import Link from 'next/link'

export default function TeamPage() {
return (
    <main>
    <div className="flex">
        <Link href="/component/team/griffon/player">
        <Image
            // 自宅で画像を入れる
            src="/gamelogo-image/freegame.png"
            alt="架空ゲームロゴ"
            width={200}
            height={300}
        />
        <p className="m-10 h-1 text-2xl text-center">Dragon Knight Fight</p>
        </Link>
    </div>
    </main>
)
}
