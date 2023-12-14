import Link from 'next/link'
import Image from 'next/image'
import DeviceReviewPage from '@/app/device_reviews/page'

export default function KeyboardPage() {
    const text = "REALFORCEのキーボードは静電容量無接点方式が採用されており、非常にタイピングがしやすく耐久性も高い\n打鍵感はあまりなくしっかり押したい方にはあまりお勧めではない\n余談だがどうやらふるさと納税でこのキーボードを返礼品として頂ける事には驚いた";

return (
    <main>
    <div className="text-center text-2xl">
        <h1 className="">GX1 KEYBOARD / X1UD13</h1>
    </div>
    <div className="flex justify-center m-4">
        <div className="m-4">
        <Image
            src="/device-image/gx1.jpg"
            alt="gx1画像"
            width={300}
            height={400}
        />
    <div className="flex flex-col items-center">
    <p className="whitespace-pre-wrap">{text}</p>
    </div>
        </div>
    </div>
    <div className="text-center text-2xl">
        <Link href="https://www.realforce.co.jp/products/X1UD13/">
        <h2>こちらから公式ページに飛べます！</h2>
        </Link>
    </div>
    <div className="text-center text-1xl mt-5">
        <h3>デバイスレビュー</h3>
        <DeviceReviewPage />
    </div>
    </main>
)
}
