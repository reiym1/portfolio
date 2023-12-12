import Link from 'next/link'
import Image from 'next/image'

export default function KeyboardPage() {
    return (
        <main>
        <div className="flex">
            <Image
                // 自宅で画像を入れる
                src="/icon-image/realforce.png"
                alt="会社ロゴ"
                width={200}
                height={300}
            />
        </div>
            <div>
            <h1 className="m-10 h-1 text-2xl text-center">GX1</h1>
            </div>
            <Link href="/component/keyboard/device/gx1">
            <Image
                // 自宅で画像を入れる
                src="/icon-image/realforce.png"
                alt="gx1画像"
                width={200}
                height={300}
            />
            </Link>
        </main>
    )
    }