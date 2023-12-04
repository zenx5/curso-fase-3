import Link from "next/link"

export default function Layout({ children }:{ children:any }) {


    return <div className="w-screen h-screen">
        <nav className="bg-black h-24 absolute top-0 z-10 w-full flex flex-row items-center justify-between px-10 shadow-lg">
            <span className="text-white w-80">
                <h1 className="font-medium text-5xl uppercase">K a v a v</h1>
                <small className="italic text-xl uppercase text-right w-full pr-10 block">D i g i t a l</small>
            </span>
            <ul className="flex flex-row gap-4 text-white font-medium cursor-pointer">
                <li className="border border-transparent hover:border-white rounded-md px-2 py-1">
                    <Link href="#">Home</Link>
                </li>
                <li className="border border-transparent hover:border-white rounded-md px-2 py-1">
                    <Link href="#">Portafolio</Link>
                </li>
                <li className="border border-transparent hover:border-white rounded-md px-2 py-1">
                    <Link href="#">Contacto</Link>
                </li>
                <li className="border border-transparent hover:border-[#f33] rounded-md px-2 py-1 bg-[#f33] hover:bg-transparent text-black hover:text-[#f33] hover:shadow-[#f33] hover:shadow-md">
                    <Link href="#">Soy estudiante</Link>
                </li>
            </ul>
        </nav>
        <div className="px-10 py-24 h-full w-full bg-slate-300">{children}</div>
    </div>
}