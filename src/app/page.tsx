import Link from "next/link";
import ButtonTest from "@/components/ButtonTest";

export default function Home() {

  return <div className="bg-slate-500 h-screen w-screen flex flex-row justify-center items-center">
    <div className="bg-white p-2 rounded-lg md:w-1/3 w-full mx-10 flex flex-col items-center">
      <h1 className="text-lg font-bold">Bienvenid@ a la Fase 3</h1>
      <div className="flex flex-col gap-2 py-4">
        <Link className="border border-indigo-400 text-indigo-600 hover:text-white hover:bg-indigo-500 px-10 py-1 rounded-lg" href="/login">Vista para Login</Link>
        <Link className="border border-indigo-400 text-indigo-600 hover:text-white hover:bg-indigo-500 px-10 py-1 rounded-lg" href="/perfil">Vista para Perfil</Link>
        <Link className="border border-indigo-400 text-indigo-600 hover:text-white hover:bg-indigo-500 px-10 py-1 rounded-lg" href="/consulta">Vista para Consulta</Link>
        <ButtonTest />
      </div>
    </div>
  </div>
}
