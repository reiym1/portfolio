import Image from 'next/image'
import Link from 'next/link'

export default function JapanPage() {
  return (
    <main>
      {/* <div className="flex justify-center gap-10 p-20">
        <Link href="/dfm">
          <Image
            src="/team-image/dfm.png"
            alt="DFMチームロゴ"
            width={200}
            height={300}
          />
          <p className="mt-5 mr-2 h-1 text-2xl ">DetonatioN FocusMe</p>
        </Link>
        <Link href="/component/team/zeta">
          <Image
            src="/team-image/zeta.png"
            alt="ZETAロゴ"
            width={300}
            height={400}
          />
          <p className="m-10 h-1 text-2xl text-center">ZETA DIVISION</p>
        </Link>
        <Link href="/cr">
          <Image
            src="/team-image/cr.png"
            alt="CRロゴ"
            width={150}
            height={200}
          />
          <p className="m-10 h-1 text-2xl text-center">Crazy Raccoon</p>
        </Link>
      </div> */}
        <div className="flex justify-center gap-10 p-20">
        <Link href="/component/team/griffon">
          <Image
            src="/team-image/grifon.jpg"
            alt="架空チームロゴ"
            width={200}
            height={300}
          />
          <p className="mt-5 mr-2 h-1 text-2xl">Griffon</p>
        </Link>
        </div>
    </main>
  )
}
