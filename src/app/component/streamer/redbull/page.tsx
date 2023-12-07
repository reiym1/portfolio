import Image from "next/image"
import Link from "next/link"

export default function RedBullPage() {
    return (
        <main>
    <div className="flex justify-center gap-10 p-20">
        <Link href="/component/streamer/redbull/shaka">
        <Image  
            src="/streamer-image/syacach.jpg" 
            alt="shakaさん宣材写真"
            width={200}
            height={300}
        />
        <p className="m-10 h-1 text-2xl text-center">SHAKA</p>
        </Link>
    </div>
        </main>
    )
    }