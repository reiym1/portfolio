import Image from "next/image"
import Link from "next/link"
// import progamer from "...../component/progamer"

export default function ZeusPage() {
    return (
<div>
    <div className="flex justify-center gap-10 p-20">
        <Image src="/progamer-image/Zeus.jpg"
                    alt="Zeus宣材写真"
                    width={200}
                    height={300}
        />
    </div>
    <div>
        <h2>実績</h2>
        <p>2023 World Championship [Worlds 2023] 優勝
        Worlds Finals MVP
        LCK Summer 2023 準優勝
        </p>
    </div>
    <h3>選手紹介</h3>
    <p className="flex justify-center">
        T1のTOPレーナー。世界最高峰のリーグと名高いLCKで最強TOPレーナーと言われている。
        (途中の文)中でもヨネとジェイスは誰も止められないほど実力
        (最後の文)そして2023年WCS T1のTOPレーナーとして出場し優勝。更にMVPまで受賞し名実共に世界最強となりTOPの神様となった。</p>
    <div>
        <h4>使用デバイス</h4>
            <p>不明(情報が分かり次第追加していきます。)</p>   
            {/* <Link></Link> */}
    </div>
</div>
    
    )
}