import Image from "next/image"
import Link from "next/link"

export default function Page() {
    const user = {
        name: 'Octavio Martinez',
        image: "https://avatars.githubusercontent.com/u/26119733?v=4",
        usergithub: 'Zenx5',
        average: 7.5
    }

    const baseCourse = {
        name: "Desarrollo Web",
        subname: "Maquetacion Web",
        level: 1,
        icon: "/icoMaquet.png",
        image: "/ProfileMaquetacion.jpg"
    }

    const historyCourses = [
        {
            id: 1,
            ...baseCourse
        },
        {
            id: 2,
            ...baseCourse
        },
        {
            id: 3,
            ...baseCourse
        }

    ]

    return <div className="bg-slate-500  text-black lg:flex lg:flex-row lg:justify-center pb-[30px] lg:h-full h-auto">
        <div className="lg:w-4/12 w-full lg:flex lg:flex-col h-fulljustify-center">
            <nav className="flex flex-col justify-center items-center h-full w-full">
                <Image src={user.image} alt="" width={200} height={200} className="rounded-full w-[180px] h-[180px] mb-[10%] transform lg:hover:scale-[110%] transition-all" />
                <span className="text-2xl uppercase mb-[5%] lg:hover:underline">{user.name}</span>
                <span className="text-2xl italic mb-[5%] lg:hover:underline">{user.usergithub}</span>
                <span className="fond-bold text-2xl capitalize mb-[50px] lg:hover:text-gray-500">Rating: {user.average}</span>
            </nav>
        </div>

        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center sm:w-full " >
            <div className="w-full px-2 sm:px-20">
                <h1 className="text-white mt-[3%] font-bold italic mb-[15px] text-[20px] text-center lg:pt-[2%] transform lg:hover:scale-[110%] transition-all">Cursos Realizados</h1>
                <div className="w-full flex lg:flex-row flex-col justify-between gap-4">

                    { historyCourses.map( course => <Link key={course.id} href="" className="block lg:w-80 w-full rounded-lg bg-white pb-2 overflow-hidden"> {/**lg:rounded-lg lg: lg:mr-[20px] */}
                        <Image src={course.image} alt="" width={160} height={160} className="w-full h-[160px] transform lg:hover:scale-[110%] transition-all" />
                        <div className="flex flex-row">
                            <Image src={course.icon} alt="" width={50} height={50} className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]" />
                            <div className="flex flex-col mt-[10px]">
                                <span className="text-bold text-sm text-black text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px]" >Maquetación web con Tailwind y Visual Estudio Code</span>
                                <div className="flex flexrow">
                                    <span className="text-black text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                    <span className="text-black text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div>
                            </div>
                        </div>
                    </Link>)}

                </div>
            </div>

            <div className="w-full px-20">
                <h1 className="text-white mt-[3%] font-bold italic mb-[15px] text-[20px] text-center lg:pt-[2%] lg:hover:scale-[110%] transition-all">Cursos Disponibles</h1>
                <div className="w-full flex lg:flex-row flex-col justify-between gap-4">

                    { historyCourses.map( course => <Link key={course.id} href="" className="block lg:w-80 w-full rounded-lg bg-white pb-2 overflow-hidden"> {/**lg:rounded-lg lg: lg:mr-[20px] */}
                        <Image src={course.image} alt="" width={160} height={160} className="w-full h-[160px] transform lg:hover:scale-[110%] transition-all" />
                        <div className="flex flex-row">
                            <Image src={course.icon} alt="" width={50} height={50} className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]" />
                            <div className="flex flex-col mt-[10px]">
                                <span className="text-bold text-sm text-black text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px]" >Maquetación web con Tailwind y Visual Estudio Code</span>
                                <div className="flex flexrow">
                                    <span className="text-black text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                    <span className="text-black text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div>
                            </div>
                        </div>
                    </Link>)}

                </div>
            </div>

        </div>
        {/* <div className=" bg-white w-[230px] h-[55px] z-10 text-white fixed bottom-5 left-[20%] rounded-full lg:hidden">
            <span className="absolute text-black pl-[32px] w-full pr-none mr-none pt-[15px] text-[15px] font-bold uppercase z-10">Cursos disponibles</span>
            <label htmlFor="" id="clas" className="w-200px text-black z-10" >
                <input type="checkbox" id="clas" className="peer opacity-0 z-10 absolute left-2 w-[200px] h-[55px] z-10" />
                <img src="ProfileImg.png" className="w-[40px] cursor-pointer mt-[9px] ml-[8px] z-10" />
                <div className="bg-gradient-to-l from-purple-500  bg-yellow-300 peer-checked:block hidden flex fixed z-0 top-0 left-0 h-full w-full justify-center items-center flex-col pt-[25px] pt-[20px]">

                    <h1 className="text-white mt-[3%] font-bold italic mb-[15px] text-[20px] text-center">Cursos Disponibles</h1>
                    <a className=" w-full h-[240px] lg:rounded-lg">
                        <img src="React.png" alt="" className="w-full h-[160px] lg:rounded-lg" />
                        <div className="flex flex-row">
                            <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]" />
                            <div className="flex flex-col mt-[10px]">
                                <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px]" >Diseño de web a nivel funcional con React y Visual Estudio Code</span>
                                <div className="flex flexrow">
                                    <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                    <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div>
                            </div>
                        </div>
                    </a>

                </div>
            </label>
        </div> */}
    </div>
}