import Image from "next/image"
import Link from "next/link"

export default function ProGamerPage() {
  return (
    <main>
      <div className="flex justify-center">
      <Link href="/component/progamer/japan">
      <Image  
        src="/country-image/japan.avif" 
        alt="国内背景"
        width={200}
        height={300}
      />
      <p className="m-10 h-1 text-2xl text-center">国内</p>
      </Link>
      {/* </div>
      <div className="flex justify-center"> */}
      <Link href="/international">
      <Image 
          src="/country-image/international.jpg" 
          alt="海外背景"
          width={200}
          height={300}
        />
      <p className="m-10 h-1 text-2xl text-center">国外</p>
      </Link>
      </div>
    </main>
  )
}
