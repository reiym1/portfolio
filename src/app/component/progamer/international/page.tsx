import Image from 'next/image'
import Link from 'next/link'

export default function InternationalPage() {
return (
    <main>
    <div className="flex justify-center gap-10 p-20">
        <Link href="/component/team/t1">
        <Image
            src="/team-image/t1.png"
            alt="T1ロゴ"
            width={200}
            height={300}
        />
        <p className="m-10 h-1 text-2xl">T1</p>
        </Link>
    </div>
    </main>
)
}
