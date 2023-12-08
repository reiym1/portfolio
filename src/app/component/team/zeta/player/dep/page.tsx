import Image from "next/image"
import Link from "next/link"
// import progamer from "...../component/progamer"

export default function DepPage() {
    return (
<div>
    <div >
        <Image src="/progamer-image/Dep.jpg"
                    alt="Depさん宣材写真"
                    width={200}
                    height={300}
        />
    </div>
    <div>
        <h2>実績</h2>
        <p>ここに今までの実績</p>
    </div>
    <h3>選手紹介</h3>
    <p>ここに選手紹介文</p>
    <div>
        <h4>使用デバイス</h4>
            <p>マウス: Razer Viper V2 PRO WHITE</p>   
            {/* <Link></Link> */}
    </div>
</div>
    
    )
}