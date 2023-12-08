import Image from "next/image";

export default function Page() {


    return <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between gap-2 mt-10">
            <div className="w-1/2 flex flex-col items-center justify-center h-[30rem]">
                <h1 className="text-[18rem] p-0 m-0 before:content-['K'] before:text-red-500 before:left-[12rem] before:relative relative -top-16">K</h1>
            </div>
            <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-5">¿Quienes Somos?</h2>
                <span className="flex flex-col gap-4 text-lg">
                    <p>Somos una comunidad de desarrolladores que colaboran entre si para ser mejores profesionales mientras comparten su experiencia con aquellos que aceptan el desafio de iniciar en el mundo del desarrollo.</p>
                    <p>En ese sentido compartimos sin mezquinda lo que hemos aprendido, y no solo el conocimiento tecnico, tambien nuestras experiencias.</p>
                    <p>Aprende como formarte enfocado hacia el mundo laboral, tips para entrevistas de trabajo y como saber que empresas son <span className="text-[#ff3333] font-medium">red flag</span>.</p>
                </span>
            </div>
        </div>
        <h2 className="text-3xl text-center">Cursos</h2>
        <div className="flex flex-row justify-between px-10">
            <span className="flex flex-col gap-2 items-center text-slate-500">
                <QuestionIcon  className="w-24 h-24"/>
                <span className="text-xl">Icono</span>
            </span>
            <span className="flex flex-col gap-2 items-center text-slate-500">
                <QuestionIcon  className="w-24 h-24"/>
                <span className="text-xl">Icono</span>
            </span>
            <span className="flex flex-col gap-2 items-center text-slate-500">
                <QuestionIcon  className="w-24 h-24"/>
                <span className="text-xl">Icono</span>
            </span>
            <span className="flex flex-col gap-2 items-center text-slate-500">
                <QuestionIcon  className="w-24 h-24"/>
                <span className="text-xl">Icono</span>
            </span>
            <span className="flex flex-col gap-2 items-center text-slate-500">
                <QuestionIcon  className="w-24 h-24"/>
                <span className="text-xl">Icono</span>
            </span>

        </div>
    </div>
}


const QuestionIcon = (props:any) =>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>
