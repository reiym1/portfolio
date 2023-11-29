import Image from 'next/image'
import Link from 'next/link'

export default function JapanPage() {
  return (
    <main>
      <div className="flex">
        <Link href="/dfm">
          <Image
            src="/team-image/dfm.png"
            alt="DFMチームロゴ"
            width={200}
            height={300}
          />
          <p className="m-10 h-1 text-2xl text-center">DetonatioN FocusMe</p>
        </Link>
      </div>
      <div className="flex">
        <Link href="/component/team/zeta">
          <Image
            src="/team-image/zeta.png"
            alt="ZETAロゴ"
            width={200}
            height={300}
          />
          <p className="m-10 h-1 text-2xl text-center">ZETA DIVISION</p>
        </Link>
      </div>
      <div className="flex">
        <Link href="/cr">
          <Image
            src="/team-image/cr.png"
            alt="CRロゴ"
            width={200}
            height={300}
          />
          <p className="m-10 h-1 text-2xl text-center">Crazy Raccoon</p>
        </Link>
      </div>
    </main>
  )
}
