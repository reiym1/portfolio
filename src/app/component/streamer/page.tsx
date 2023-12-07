import Image from "next/image"
import Link from "next/link"

export default function StreamerPage() {
    return (
        <main>
          <div className="flex justify-center gap-10 p-20">
          <Link href="/component/streamer/redbull">
          <Image  
            src="/country-image/japan.avif" 
            alt="企業ロゴ"
            width={200}
            height={300}
          />
          <p className="m-10 h-1 text-2xl text-center">RedBull</p>
          </Link>
          <Link href="/component/streamer/zeta">
          <Image 
              src="/country-image/international.jpg" 
              alt="海外背景"
              width={200}
              height={300}
            />
          <p className="m-10 h-1 text-2xl text-center">Zeta</p>
          </Link>
          <Link href="/component/streamer/free">
          <Image 
              src="/country-image/international.jpg" 
              alt="海外背景"
              width={200}
              height={300}
            />
          <p className="m-10 h-1 text-2xl text-center">無所属（フリーランス）</p>
          </Link>
          </div>
        </main>
      )
    }
    