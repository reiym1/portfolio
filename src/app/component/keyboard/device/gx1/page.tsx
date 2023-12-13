import Link from 'next/link'
import Image from 'next/image'

export default function KeyboardPage() {
    return (
        <main>
            <div className="text-2xl">
            <h1>企業一覧</h1>
            </div>
        <div className="flex justify-center">
            <Image
                src="/icon-image/realforce.png"
                alt="会社ロゴ"
                width={200}
                height={300}
            />
        </div>
        <div className="flex m-4">
            <div className="m-4">
            <Link href="/component/keyboard/device/gx1">
            <Image
                src="/device-image/gx1.jpg"
                alt="gx1画像"
                width={300}
                height={400}
            />
            </Link>
            <p className="text-2xl">GX1 KEYBOARD / X1UD13</p>
            </div>
            <div className="m-4">
            <Link href="/component/keyboard/device/gx111">
            <Image
                src="/device-image/gx111.jpg"
                alt="gx1画像"
                width={300}
                height={400}
            />
            </Link>
            <p className="text-2xl">GX1 KEYBOARD / X1UD11</p>
            </div>
        </div>
        </main>
    )
    }