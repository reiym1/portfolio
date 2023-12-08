import Image from "next/image"
import Link from "next/link"

export default function TonakaiPage() {
    return (
        <main>
<div className="flex justify-center gap-10 p-20">
        <Image  
            src="/streamer-image/tonakai.png" 
            alt="オバマ宣材写真"
            width={200}
            height={300}
        />
        </div>
        <div className="text-5xl text-center">
            <h1>TONAKAI</h1>
        </div>
        <div className="text-center">
            <h2>実績</h2>
            <p> 2023年12月 Riot Games ONE TFT STREAMER東西戦 優勝
                2023年8月 TFT STREAMERLeague 優勝  
                2022年9月 VALORANT〇〇〇〇大会 優勝 使用キャラ ジェット 大会MVP
            </p>
        </div>
        <div className="text-center">
            <h3>配信者紹介</h3>
            <p>一度ハマるとずっとハマったゲームしかやらなくなる。だが驚異的なスピードで成長する為やるゲームは基本高レート。
            たまに出る奇声は万人を笑わせている特に筆者の個人的感想であるが人間でフリーザのように「ｷｨｴｪｪｪｪｪｪｪｪｪ」と発声できる人間を声優である中尾隆聖氏以外知らない
            2018年に発売されたMonsterHunter:Worldを発売してから2日でクリアしここから人気が急上昇昨年は登録者100万人を達成。
            その人気がとどまる所を知らない
            </p>
        </div>
        <div>
            <h4 text-5xl text-center>使用デバイス</h4>
            <p></p>
        </div>
        </main>
    )
    }