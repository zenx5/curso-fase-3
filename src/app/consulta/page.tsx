"use client"
import { useEffect, useState } from "react";
// importa desde ../../tool/services/QueryService.ts
import QueryService from "../../tools/services/QueryService";
import CourseModel from "@/tools/models/CourseModel";
import UserModel from "@/tools/models/UserModel";

export default function Page() {

    const [inputValue, setInputValue] = useState<string>("");
    const [datas, setDatas] = useState<any>();
    const [userData, setUserData] = useState<any>();
    const [courseData, setCourseData] = useState<any>();


    const search = async ( email: string )=> {
        const query: any = (await QueryService.query( email ))
        console.log(query)

        const course = (await CourseModel.get( query.courseId ));
        console.log(course)

        const users:any = await UserModel.get( query.userId );
        console.log(users)

        const user = users.find( ( user:any ) => {
            return user.email == email
        })

        setDatas({ user, course, query });
    }

    const handlerFormSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault( );
        search( inputValue );
    }
console.log(datas)


    return <div className="bg-pink-200 sm:h-screen">

        {/* Barra de busqueda */}
        <form
            className="mx-auto text-center py-6 mb-10 bg-purple-300 flex flex-col items-center w-full"
            onSubmit={ handlerFormSubmit }
        >
            <input
                type="text"
                placeholder="Buscar"
                className="rounded-lg w-full h-10 pl-3 bg-violet-200 mb-4 max-w-xs sm:max-w-2xl"
                value={inputValue}
                onChange={ ( event ) => setInputValue( event.target.value ) }
            />
            <button 
                className="border border-violet-800 rounded-lg p-2 w-32" 
                title="Buscar"
            >Buscar</button>
        </form>
        
        <div className="flex flex-col justify-center items-center">
            { datas && datas.user && datas.query.length && datas.course?.length && (

            <div
                className="w-full sm:max-w-2xl bg-yellow-100 flex flex-col items-center sm:items-start sm:rounded-lg mb-10 p-6"
            >
                <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center">
                    {/* Imegen de usuario*/}
                    <div className="w-28 m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {/* <image href={datas.user.image} /> */}
                    </div>
                    {/* Datos de usuarios */}
                    <div className="mb-4 text-center font-mono m-auto">
                        <div className="font-bold">Nombre: {datas.user.name}</div>
                        <div>Edad: 27</div>
                        <div>Cursos Realizados:</div>
                    </div>
                </div>
                
                <div className="mt-5 w-full flex flex-col items-center">
                    
                    {/* tecnologias vistas */}
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-2 text-center m-2 w-full max-w-xs sm:max-w-none sm:flex-row w-full flex-wrap">
                        {
                            datas.course.map( ( course: any ) => (
                                <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300 w-full" href="#"
                                    >{course.name}</a>
                            ))
                        }
                        {/* <div className="flex flex-col items-center sm:flex-row w-full"> */}
                            {/* <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300 w-full" href="#"
                                >Maquetacion Web</a>
                            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300 w-full" href="#"
                                >JavaScript</a>
                            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300 w-full" href="#"
                                >React</a>
                            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300 w-full" href="#"
                                >NextJs</a>
                            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300 w-full " href="#"
                                >Tailwind</a>
                            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300 w-full" href="#"
                                >Python</a> */}
                    </div>
                </div>

            </div>
            )}

        </div>
    </div>
}