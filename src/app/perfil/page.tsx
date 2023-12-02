export default function Page() {


    return <div className="bg-[url('/bg.jpeg')]">
            
                <div className=" bg-white w-[55px] h-[55px] text-white fixed bottom-5 right-5 rounded-full ">
                    <label htmlFor=""  className=" w-60px ">
                    <input type="checkbox" className="peer opacity-0 z-10 absolute left-2 w-full h-[40px] "/>
                    <img src="ProfileImg.png" className="w-[40px] cursor-pointer mt-[9px] ml-[8px] "/>
                        <ul className="peer-checked:block hidden flex fixed bottom-[80px] ">
                        {/* elemento 1 */}
                            <li className="cursor-pointer w-[55px] h-[55px] bg-white rounded-full mb-[5px] active:text-red-500" > h
                                <div className="peer-active:block bg-white fixed top-1 w-[screen] hidden "> hola mundo
                                </div>
                            </li>
                            {/* finde elemento 1 */}
                            <li className="cursor-pointer w-[55px] h-[55px] bg-white rounded-full mb-[5px] " > r2</li>
                            <li className="cursor-pointer w-[55px] h-[55px] bg-white rounded-full mb-[5px] " > r3</li>
                        </ul>
                </label>
                </div>
                
{/* contenedor principal */}
                <div className="text-white flex justify-center items-center flex-col"> 
    {/* SURSOS DISPONIBLES */}
                <h1 className="text-white mt-[3%] font-bold italic mb-[15px] text-[20px] ">Cursos Realizados</h1>
    {/* TARGETA 1 */}
                <div className=" w-full h-[240px] lg:rounded-lg">
                    <img src="ProfileMaquetacion.jpg" alt="" className="w-full h-[160px] lg:rounded-lg"/>
                    <div className="flex flex-row">
                        <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                        <div className="flex flex-col mt-[10px]">
                        <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px]" >Maquetación web con Tailwind y Visual Estudio Code</span>
                            <div className="flex flexrow">
                            <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                            <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div> 
                        </div>
                    </div>
                </div>{/* FIN TARGETA1 */} 
    {/* TARGETA2   */}
                <div className=" w-full h-[240px] lg:rounded-lg">
                    <img src="ProfileMaquetacion.jpg" alt="" className="w-full h-[160px] lg:rounded-lg"/>
                    <div className="flex flex-row">
                        <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                        <div className="flex flex-col mt-[10px]">
                        <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px]" >Maquetación web con Tailwind y Visual Estudio Code</span>
                            <div className="flex flexrow">
                            <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                            <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div> 
                        </div>
                    </div>   
                </div>{/* FIN TARGETA 2 */}
    {/* TARGETA3 */}
            <div className=" w-full h-[240px] lg:rounded-lg">
                    <img src="ProfileMaquetacion.jpg" alt="" className="w-full h-[160px] lg:rounded-lg"/>
                    <div className="flex flex-row">
                        <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                        <div className="flex flex-col mt-[10px]">
                        <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px]" >Maquetación web con Tailwind y Visual Estudio Code</span>
                            <div className="flex flexrow">
                            <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                            <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div> 
                        </div>
                    </div>   
                </div>{/* FIN TARGETA3 */}
{/* CURSOS DISPONIBLES */}
            <h1 className="text-white mt-[3%] font-bold italic mb-[15px] text-[20px] ">Cursos Disponibles</h1>
            {/* TARGETA 1 */}
            <div className=" w-full h-[240px] lg:rounded-lg">
                    <img src="ProfileMaquetacion.jpg" alt="" className="w-full h-[160px] lg:rounded-lg"/>
                    <div className="flex flex-row">
                        <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                        <div className="flex flex-col mt-[10px]">
                        <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px]" >Maquetación web con Tailwind y Visual Estudio Code</span>
                            <div className="flex flexrow">
                            <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                            <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div> 
                        </div>
                    </div>
                </div>{/* FIN TARGETA1 */}

            </div>{/* FIN CONTENEDOR PRICIPAL */}

    </div>
}