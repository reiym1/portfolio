import Image from "next/image"
import Link from "next/link"

export default function ObamaPage() {
    return (
        <main>
        <div className="flex justify-center gap-10 p-20">
        <Image  
            src="/streamer-image/obama0402.png" 
            alt="オバマ宣材写真"
            width={200}
            height={300}
        />
        </div>
        <div className="text-5xl text-center">
            <h1>Obama0402</h1>
        </div>
        <div className="text-center">
            <h2>実績</h2>
            <p> 2023年Getting Over It with Bennett FoddyRTA 関東地区優勝
                2023年VALORANT〇〇〇〇大会 最優秀コントローラー賞受賞※使用キャラ ブリムストーン
                2022年Grand Theft Auto V ストリーマーサーバー 最も長くログインしていたプレイヤー賞受賞 ※50時間
            </p>
        </div>
        <div className="text-center">
            <h3>配信者紹介</h3>
            <p>自称自分を人間だと思っているゴリラ。
            伝説ともいえる2018年GTA:Vの配信を皮切りに人気が爆発
            彼の名言は「はんだ付け飲む」
            現在もその摩訶不思議なワードセンスで視聴者を笑顔にしながら活動を続けている。
            近々重大発表があるようだが…？（2023年12月15日発表）
            </p>
        </div>
        </main>
    )
    }