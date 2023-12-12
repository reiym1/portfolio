import Image from "next/image"
import Link from "next/link"

export default function StreamerPage() {
    return (
        <main>
        <div className="flex justify-center m-10 gap-8">
          <div className="flex justify-center mt-10 gap-8">
          <Link href="/component/streamer/redbull">
          <Image  
            src="/streamer-image/redbull.jpg" 
            alt="RedBullロゴ"
            width={210}
            height={300}
          />
          <p className="m-6 h-1 text-2xl text-center">RedBull</p>
          </Link>
          </div>
            <div className="flex justify-center mt-20">
              <Link href="/component/streamer/redbull">
                <Image 
                src="/team-image/zeta.png" 
                alt="Zetaロゴ"
                width={200}
                height={300}
                />
                  <p className="m-10 h-1 text-2xl text-center">Zeta</p>
                </Link>
            </div>
                  <div className="flex justify-center mt-20">
                    <Link href="/component/streamer/free">
                      <Image 
                      src="/team-image/freeman.png" 
                      alt="フリーランス"
                      width={100}
                      height={100}
                      />
                        <p className="m-10 h-1 text-2xl text-center">無所属（フリーランス）</p>
                    </Link>
                  </div>
        </div>
        </main>
      )
    }
    