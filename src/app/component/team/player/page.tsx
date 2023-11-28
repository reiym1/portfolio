import Image from "next/image"
import Link from "next/link"

export default function TeamPage() {
return (
    <main>
    <div className="flex">
    <Link href="/component/progamer/japan/zeta/player">
    <Image
    // 自宅で画像を入れる  
        src="/icon-image/idol1.png" 
        alt="VAROロゴ"
        width={200}
        height={300}
    />
    <p className="m-10 h-1 text-2xl text-center">VAROLANT</p>
    </Link>
    </div>
    </main>
)
}
