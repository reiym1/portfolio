import Image from "next/image"
import Link from "next/link"

export default function FreePage() {
    return (
        <main>
    <div className="flex justify-center gap-10 p-20">
        <Link href="/component/streamer/free/obama">
        <Image  
            src="/streamer-image/obama0402.png" 
            alt="オバ宣材写真"  
            width={200}
            height={300}
        />
        <p className="m-10 h-1 text-2xl text-center">obama0402</p>
        </Link>
    </div>
        </main>
    )
    }