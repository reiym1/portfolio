import Image from "next/image"
import Link from "next/link"

export default function FakerPage() {
    const achievements = "2023 World Championship Worlds 2023 優勝 \nLCK Summer 2023 準優勝"
    const text = "T1のMIDレーナー。LoLのプロプレイヤーといえばこの方と言われるほど長くプロ選手を続けているプレイヤー。\n世界最高峰のリーグと名高いLCKでプレイしておりMIDの神様と言われる程上手い。\n人力スクリプトと言われている程上手く、現在27歳であり本来であればプレイヤーとして衰えてくるはずなのにまだ老いを知らないプレイを連発。\n(途中の文)特にFakerのライズ、アジール、ビクター、オリアナこのチャンピオン達を使用した時のパフォーマンスが素晴らしい \nそして2023年WCS T1のMIDレーナーとして出場し優勝。前人未踏の4度目の優勝を果たした。";

    return (
<div >
    <div className="flex justify-center gap-10 p-20">
        <Image src="/progamer-image/Faker.jpg"
                    alt="Faker宣材写真"
                    width={200}
                    height={300}
        />
    </div>
    <div>
        <h1 className="text-5xl text-center">T1 Faker</h1>
    </div>
    <div className="mt-7">
        <h2 className="text-2xl text-center">実績</h2>
        <div className="flex flex-col items-center">
        <p className="whitespace-pre-wrap">{achievements}</p>
        </div>
    </div>
    <div>
    <h3 className="text-2xl text-center">選手紹介</h3>
    </div>
    <div className="flex flex-col items-center">
    <p className="whitespace-pre-wrap">{text}</p>
    </div>
    <div>
    <h4 className="text-2xl text-center">使用デバイス</h4>
    </div>
    <div className="flex gap-8">
            <div>
            <p className="">
                マウス: Razer DeathAdder V3 Pro Faker Edition
                </p>   
            <Link 
            href="https://www.amazon.co.jp/dp/B0BY8NP886/ref=as_sl_pc_as_ss_li_til?tag=lolsyoshinsya-22&linkCode=w00&linkId=d3de23d2e3c1e50ac1e6b276e05fece7&creativeASIN=B0BY8NP886">
                <Image 
                src="/device-image/fakermausu.jpg"
                alt="Faker使用マウス"
                width={100}
                height={100}
        />
            </Link>
            </div>
            <div>
            <p className="">
                キーボード: CORSAIR USB-C K70 RGB TKL CHAMPION MX Cherry MX Red
            </p>
            <Link
            href="https://www.amazon.co.jp/dp/B08XQM3K3N/ref=as_sl_pc_as_ss_li_til?tag=lolsyoshinsya-22&linkCode=w00&linkId=e882e2f59cb3da870055d2231e432471&creativeASIN=B08XQM3K3N&th=1">
                <Image className="flex object-left"
                src="/device-image/fakerkeyboard.jpg"
                alt="Faker使用キーボード"
                width={270}
                height={200}
        />
            </Link>
    </div>
    </div>
    <div>
        <h5>この選手のモンタージュURL</h5>
        {/* ここにモンタージュ動画やクリップURLを置く*/}
        {/* <Link></Link> */}
    </div>
</div>
    
    )
}