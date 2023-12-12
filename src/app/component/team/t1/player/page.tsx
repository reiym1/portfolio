import Image from 'next/image'
import Link from 'next/link'

export default function PlayerPage() {
return (
    <main>
    <div className="flex justify-center gap-10 p-20">
        <Link href="/component/team/t1/player/zeus">
        <Image
            // 自宅で画像を入れる
            src="/progamer-image/Zeus.jpg"
            alt="Zeus宣材写真"
            width={200}
            height={300}
        />
        <h1 className="m-10 h-1 text-2xl text-center">Zeus</h1>
        </Link>
        <Link href="/component/team/t1/player/oner">
        <Image 
        src="/progamer-image/Oner.jpg"
        alt="Oner宣材写真"
        width={200}
        height={300}
        />
        <h2 className="m-10 h-1 text-2xl text-center">Oner</h2>
        </Link>
        <Link href="/component/team/t1/player/faker">
        <Image 
        src="/progamer-image/Faker.jpg"
        alt="Faker宣材写真"
        width={200}
        height={300}
        />
        <h3 className="m-10 h-1 text-2xl text-center">Faker</h3>
        </Link>
    </div>
    </main>
)
}
