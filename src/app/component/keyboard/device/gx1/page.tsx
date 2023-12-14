import Link from 'next/link'
import Image from 'next/image'

export default function KeyboardPage() {
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
          <p className="text-center text-2xl"></p>
        </div>
      </div>
      <div>
        <Link href="https://www.realforce.co.jp/products/X1UD13/">
          <h2>こちらから公式ページに飛べます！</h2>
        </Link>
      </div>
    </main>
  )
}
