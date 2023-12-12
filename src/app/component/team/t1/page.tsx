import Image from 'next/image'
import Link from 'next/link'

export default function TeamPage() {
return (
    <main>
    <div className="flex justify-center gap-10 m-10 p-10">
        <Link href="/component/team/t1/player">
        <Image
            // 自宅で画像を入れる
            src="/gamelogo-image/lol.png"
            alt="LoLロゴ"
            width={200}
            height={300}
        />
        <p className="m-10 h-1 text-center ">LeagueOfLegends</p>
        </Link>
    </div>
    </main>
)
}
