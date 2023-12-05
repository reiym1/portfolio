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
    <div></div>
    <div>
        <h4>使用デバイス</h4>
            <p>マウス: Razer Viper V2 PRO WHITE</p>   
            {/* <Link></Link> */}
    </div>
</div>
    
    )
}