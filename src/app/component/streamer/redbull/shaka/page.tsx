import Image from "next/image"
import Link from "next/link"

export default function ShakaPage() {
    return (
        <main>
        <div className="flex justify-center gap-10 p-20">
        <Image  
            src="/streamer-image/syacach.jpg" 
            alt="shakaさん宣材写真"
            width={200}
            height={300}
        />
        </div>
        <div className="text-5xl text-center">
            <h1>SHAKA</h1>
        </div>
        <div>
            <h2>実績</h2>
            <p>ここに最近の実績</p>
        </div>
        <div>
            <h3>配信者紹介</h3>
            <p>ここに人物紹介</p>
        </div>
        </main>
    )
    }