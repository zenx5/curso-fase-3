export default function Page() {


    return <div className="bg-gradient-to-l from-purple-500  bg-yellow-300  text-white lg:flex lg:flex-row w-full lg:h-full pb-[30px]">
                <nav className=" pt-[30%] lg:pt-[7%] lg:pl-[2%] flex flex-col justify-center items-center w-screen mb-[100px] lg:fixed lg:pr-[20px] lg:border-white lg:h-screen lg:w-[400px]">
                <ul> <img src="Profile1.png" alt="" className="rounded-full w-[180px] h-[180px] mb-[10%] transform lg:hover:scale-[110%] transition-all cursor-pointer" /></ul>
                <ul className="text-2xl italic uppercase mb-[5%] lg:hover:text-gray-500 lg:hover:underline cursor-pointer">Ricardo Garcés</ul>
                <ul><a href="https://github.com/rIcardojjgh1" className="border-white lg:hover:border-black transition-all lg:hover:bg-black border-[1px] w-[250px] h-[40px] mb-[15px] flex flex-row justufy-center items-center rounded-lg">
                    <img src="Git hub.png" alt="" className="w-[30px] h-[25px] ml-[20px] " /> 
                    <span className="mb-[2%] font-bold uppercase text-sm ml-[15px] pt-[2px]">usuario de github</span>
                    </a> </ul>
                <ul className="fond-bold text-2xl capitalize mb-[50px] lg:hover:text-gray-500 cursor-pointer">Puntuasión general</ul>
                <ul className="animate-bounce underline text-gry-500 text-2xl font-semibold active:animate-spin trasition-sm lg:hover:text-gray-500 cursor-pointer">8,5 PUNTOS</ul>
                </nav>
                <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center lg:w-full lg:px-[5%]  lg:flex-col lg:pl-[25%]" >{/* contenedor principal */}
                <div>{/* cursos realizados */}
                 <h1 className="text-white mt-[3%] font-bold italic mb-[15px] text-[20px] text-center lg:pt-[2%] transform lg:hover:scale-[110%] transition-all">Cursos Realizados</h1>
                    <div className="lg:w-full lg:flex lg:flex-row">
                     {/* TARGETA 1 */}

                <a href="" className=" w-full h-[240px] lg:rounded-lg lg:w-[270px] lg:mr-[20px]">
                    <img src="ProfileMaquetacion.jpg" alt="" className="w-full h-[160px] lg:rounded-lg transform lg:hover:scale-[110%] transition-all"/>
                        <div className="flex flex-row">
                            <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                            <div className="flex flex-col mt-[10px]">
                            <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px] lg:hover:text-gray-500" >Maquetación web con Tailwind y Visual Estudio Code</span>
                                <div className="flex flexrow">
                                    <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                    <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div> 
                                </div>
                            </div>
                </a>{/* FIN TARGETA1 */} 
                            {/* TARGETA2   */}
                    <a href="" className=" w-full h-[240px] lg:rounded-lg lg:w-[270px] mr-[20px]">
                    <img src="ProfileMaquetacion.jpg" alt="" className="w-full h-[160px] lg:rounded-lg transform lg:hover:scale-[110%] transition-all"/>
                    <div className="flex flex-row">
                        <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                        <div className="flex flex-col mt-[10px]">
                        <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px] lg:hover:text-gray-500" >Maquetación web con Tailwind y Visual Estudio Code</span>
                            <div className="flex flexrow">
                            <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                            <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div> 
                        </div>
                    </div>   
                    </a>{/* FIN TARGETA 2 */}
                    {/* TARGETA 3 */}
                    <a href="" className=" w-full h-[240px] lg:rounded-lg lg:w-[270px] lg:mr-[20px]">
                                            <img src="ProfileMaquetacion.jpg" alt="" className="w-full h-[160px] lg:rounded-lg transform lg:hover:scale-[110%] transition-all"/>
                                            <div className="flex flex-row">
                                                <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                                                <div className="flex flex-col mt-[10px]">
                                                <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px] lg:hover:text-gray-500" >Maquetación web con Tailwind y Visual Estudio Code</span>
                                                    <div className="flex flexrow">
                                                    <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                                    <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div> 
                                                </div>
                                            </div>
                                        </a>{/* FIN TARGETA3 */} 
                    
                </div>
                </div> {/* fin de CURSOS Realizados */}

                <div className="hidden lg:block ">{/* cursos Disponibles */}
                 <h1 className="text-white mt-[3%] font-bold italic mb-[15px] text-[20px] text-center lg:pt-[2%] lg:hover:scale-[110%] transition-all">Cursos Disponibles</h1>
                    <div className="lg:w-full lg:flex lg:flex-row">
                     {/* TARGETA 1 */}
                        <a href="" className=" w-full h-[240px] lg:rounded-lg lg:w-[270px] lg:mr-[20px]">
                            <img src="React.png" alt="" className="w-full h-[160px] lg:rounded-lg transform lg:hover:scale-[110%] transition-all"/>
                            <div className="flex flex-row">
                                <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                                <div className="flex flex-col mt-[10px]">
                                <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px] lg:hover:text-gray-500" >Diseño de web a nivel funcional con React y Visual Estudio Code</span>
                                    <div className="flex flexrow">
                                        <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                        <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >React</span></div> 
                                </div>
                            </div>
                        </a>{/* FIN TARGETA1 */} 
                     {/* TARGETA 2 */}
                        <a href="" className=" w-full h-[240px] lg:rounded-lg lg:w-[270px] lg:mr-[20px]">
                                            <img src="React.png" alt="" className="w-full h-[160px] lg:rounded-lg transform lg:hover:scale-[110%] transition-all"/>
                                            <div className="flex flex-row">
                                                <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                                                <div className="flex flex-col mt-[10px]">
                                                <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px] lg:hover:text-gray-500" >Diseño de web a nivel funcional con React y Visual Estudio Code</span>
                                                    <div className="flex flexrow">
                                                    <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                                    <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >React</span></div> 
                                                </div>
                                            </div>
                                        </a>{/* FIN TARGETA2 */}
                     {/* TARGETA 3 */}
                     <a href="https://v2.tailwindcss.com/docs/display" className=" w-full h-[240px] lg:rounded-lg lg:w-[270px] lg:mr-[20px]">
                        <img src="React.png" alt="" className="w-full h-[160px] lg:rounded-lg transform lg:hover:scale-[110%] transition-all"/>
                        <div className="flex flex-row">
                            <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                            <div className="flex flex-col mt-[10px]">
                            <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px] lg:hover:text-gray-500" >Diseño de web a nivel funcional con React y Visual Estudio Code</span>
                                <div className="flex flexrow">
                                    <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                    <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >React</span></div> 
                                </div>
                            </div>
                    </a>{/* FIN TARGETA1 */}
                </div>
                </div> {/* fin de CURSOS Disponibles */}

                </div>  {/* fin contenedor principal */}
{/* imput Cursos Disponibles */}
                <div className=" bg-white w-[230px] h-[55px] z-10 text-white fixed bottom-5 left-[20%] rounded-full lg:hidden">
                    <span className="absolute text-black pl-[32px] w-full pr-none mr-none pt-[15px] text-[15px] font-bold uppercase z-10">Cursos disponibles</span>
                    <label htmlFor="" id="clas"  className="w-200px text-black z-10" >
                    <input type="checkbox" id="clas" className="peer opacity-0 z-10 absolute left-2 w-[200px] h-[55px] z-10"/>
                    <img src="ProfileImg.png" className="w-[40px] cursor-pointer mt-[9px] ml-[8px] z-10"/>
                  {/* tiulo       */}
                        <div className="bg-gradient-to-l from-purple-500  bg-yellow-300 peer-checked:block hidden flex fixed z-0 top-0 left-0 h-full w-full justify-center items-center flex-col pt-[25px] pt-[20px]">
                       
                        <h1 className="text-white mt-[3%] font-bold italic mb-[15px] text-[20px] text-center">Cursos Disponibles</h1>
                        {/* TARGETA 1 */}
                        <a className=" w-full h-[240px] lg:rounded-lg">
                                <img src="React.png" alt="" className="w-full h-[160px] lg:rounded-lg"/>
                                <div className="flex flex-row">
                                    <img src="icoMaquet.png" alt="" className="rounded-full w-[40px] h-[40px] mr-[10px] ml-[15px] mt-[15px]"/>
                                    <div className="flex flex-col mt-[10px]">
                                    <span className="text-bold text-sm text-white text-[12px] uppercase leading-tight mb-[5px] ml-[10px] mr-[2px]" >Diseño de web a nivel funcional con React y Visual Estudio Code</span>
                                        <div className="flex flexrow">
                                        <span className="text-gray-300 text-[10px] ml-[15px]  mb-[3px]" >Octavio José y Moises</span>
                                        <span className="text-gray-300 text-[10px] ml-[12px]  mb-[3px]" >Tailwind</span></div> 
                                    </div>
                                </div>
                            </a>{/* FIN TARGETA1 */}

                        </div>
                            </label>
   {/* FIN de inpput Cursos disponibles */}</div>
                <br />
                <br />
                <br />  
    </div>
}