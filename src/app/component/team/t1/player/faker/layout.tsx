import NavBar from "@/app/component/nav-bar"

export default function FakerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
    <main className="flex flex-1 justify-center">{children}</main>
    )
}