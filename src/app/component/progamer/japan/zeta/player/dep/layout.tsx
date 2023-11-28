export default function DepLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
    <main className="flex flex-1 justify-center">{children}</main>
    )
}