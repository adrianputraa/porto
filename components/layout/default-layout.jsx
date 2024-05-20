import Navbar from "./navbar"

export default function DefaultLayout({ children }) {
    return (
        <div className="w-full max-w-[100dvw]">
            <Navbar />

            <main className="relative w-full mx-auto min-h-[calc(100dvh-4rem)]">
                {children}
            </main>
        </div>
    )
}